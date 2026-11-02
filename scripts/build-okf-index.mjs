import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";

async function main() {
  const rootDir = process.cwd();
  const okfDir = path.join(rootDir, "okf");
  const outputDir = path.join(rootDir, "lib", "okf");
  const outputPath = path.join(outputDir, "generated.json");

  // 1. Glob okf/**/*.md excluding okf/_meta/** and the five tooling/empty dirs
  const files = await fg("okf/**/*.md", {
    cwd: rootDir,
    ignore: [
      "okf/_meta/**",
      "okf/config/**",
      "okf/scripts/**",
      "okf/schema/**",
      "okf/templates/**",
      "okf/_reports/**",
    ],
  });

  // 2. Split into reserved files and concepts
  const reservedFiles = [];
  const conceptFiles = [];
  const directories = {};

  for (const file of files) {
    const base = path.basename(file);
    if (base === "index.md" || base === "log.md") {
      reservedFiles.push(file);
      const relPath = path.relative("okf", file).replace(/\\/g, "/");
      const dir = path.posix.dirname(relPath);
      const dirKey = dir === "." ? "." : dir;
      if (!directories[dirKey]) {
        directories[dirKey] = { hasIndex: false, hasLog: false };
      }
      if (base === "index.md") directories[dirKey].hasIndex = true;
      if (base === "log.md") directories[dirKey].hasLog = true;
    } else {
      conceptFiles.push(file);
    }
  }

  // 3 & 6. Parse frontmatter for each concept; hard fail if unparseable or missing type
  const offendingPaths = [];
  const rawConcepts = [];

  for (const file of conceptFiles) {
    const relPath = path.relative("okf", file).replace(/\\/g, "/");
    const id = relPath.replace(/\.md$/, "");
    let parsed;
    try {
      const content = fs.readFileSync(path.join(rootDir, file), "utf8");
      parsed = matter(content);
    } catch (err) {
      offendingPaths.push({ file, reason: `Unparseable frontmatter: ${err.message}` });
      continue;
    }

    if (!parsed.data || typeof parsed.data !== "object" || !parsed.data.type) {
      offendingPaths.push({ file, reason: "Missing frontmatter 'type' field" });
      continue;
    }

    rawConcepts.push({
      file,
      relPath,
      id,
      data: parsed.data,
      body: parsed.content,
    });
  }

  if (offendingPaths.length > 0) {
    console.error("HARD FAIL: Found concepts with invalid or missing frontmatter:");
    for (const off of offendingPaths) {
      console.error(`  - ${off.file}: ${off.reason}`);
    }
    process.exit(1);
  }

  // Populate concept map
  const concepts = {};
  for (const item of rawConcepts) {
    concepts[item.id] = {
      id: item.id,
      path: item.relPath,
      type: item.data.type,
      title: item.data.title || "",
      description: item.data.description || "",
      tags: Array.isArray(item.data.tags) ? item.data.tags : [],
      timestamp: item.data.timestamp || null,
      resource: item.data.resource || null,
      body: item.body,
      links: [],
      dangling: [],
    };
  }

  // 4. Link resolution from [text](target) in body
  // Negative lookbehind (?<!!) ensures image tags ![alt](src) are not treated as concept links
  const linkRegex = /(?<!!)\[([^\]]*)\]\(([^)]+)\)/g;

  for (const id in concepts) {
    const concept = concepts[id];
    const conceptDir = path.posix.dirname(concept.path);
    linkRegex.lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(concept.body)) !== null) {
      const target = match[2].trim();

      // starts with "http://" or "https://" -> ignore
      if (target.startsWith("http://") || target.startsWith("https://")) {
        continue;
      }
      // starts with "#" -> ignore
      if (target.startsWith("#")) {
        continue;
      }

      let candidateId;
      if (target.startsWith("/")) {
        // starts with "/" -> strip leading "/", strip trailing ".md"
        candidateId = target.replace(/^\/+/, "").replace(/\.md$/, "");
      } else {
        // otherwise -> resolve relative to concept's directory, strip trailing ".md"
        candidateId = path.posix
          .normalize(path.posix.join(conceptDir, target))
          .replace(/\.md$/, "");
      }

      // if candidate id exists in concept map -> push to links, else push to dangling
      if (concepts[candidateId]) {
        if (!concept.links.includes(candidateId)) {
          concept.links.push(candidateId);
        }
      } else {
        if (!concept.dangling.includes(candidateId)) {
          concept.dangling.push(candidateId);
        }
      }
    }
  }

  // 5. Parse okf/schema.md frontmatter types: and okf/index.md frontmatter for okfVersion
  const schemaPath = path.join(okfDir, "schema.md");
  let types = {};
  if (fs.existsSync(schemaPath)) {
    const schemaParsed = matter(fs.readFileSync(schemaPath, "utf8"));
    types = schemaParsed.data.types || {};
  }

  const indexPath = path.join(okfDir, "index.md");
  let okfVersion = "0.2";
  if (fs.existsSync(indexPath)) {
    const indexParsed = matter(fs.readFileSync(indexPath, "utf8"));
    okfVersion = indexParsed.data.okf_version || indexParsed.data.okfVersion || "0.2";
  }

  // 7. Write lib/okf/generated.json
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const generatedData = {
    generatedAt: new Date().toISOString(),
    okfVersion,
    types,
    concepts,
    directories,
  };

  const jsonContent = JSON.stringify(generatedData, null, 2);
  fs.writeFileSync(outputPath, jsonContent, "utf8");

  // 8. Log to stdout: concept count, directory count, count of concepts with non-empty dangling,
  // byte size of generated.json, and the ids that landed in dangling
  const conceptCount = Object.keys(concepts).length;
  const directoryCount = Object.keys(directories).length;
  const conceptsWithDangling = Object.values(concepts).filter(
    (c) => c.dangling && c.dangling.length > 0
  );
  const danglingConceptsCount = conceptsWithDangling.length;
  const byteSize = Buffer.byteLength(jsonContent, "utf8");

  const danglingSummary = {};
  for (const c of conceptsWithDangling) {
    danglingSummary[c.id] = c.dangling;
  }

  console.log("=== OKF Index Build Complete ===");
  console.log(`Concept count: ${conceptCount}`);
  console.log(`Directory count: ${directoryCount}`);
  console.log(`Concepts with non-empty dangling: ${danglingConceptsCount}`);
  console.log(`Generated file size: ${byteSize} bytes (${(byteSize / 1024).toFixed(2)} KB)`);
  console.log(`Output written to: ${outputPath}`);
  console.log("\nDangling Link IDs by Concept:");
  for (const [srcId, targets] of Object.entries(danglingSummary)) {
    console.log(`  - ${srcId}:`);
    for (const tgt of targets) {
      console.log(`      * ${tgt}`);
    }
  }
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});

