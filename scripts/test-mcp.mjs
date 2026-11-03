#!/usr/bin/env node

/**
 * Simple script to test the MediFlux MCP server connection and output results.
 *
 * Usage:
 *   node scripts/test-mcp.mjs [url]
 *
 * Examples:
 *   node scripts/test-mcp.mjs
 *   node scripts/test-mcp.mjs http://localhost:3000/api/mcp
 *   node scripts/test-mcp.mjs https://www.docs.mediflux.in/api/mcp
 */

const MCP_URL = process.argv[2] || process.env.MCP_URL || "http://localhost:3000/api/mcp";

let requestId = 1;

async function sendRpc(method, params = {}) {
  const id = requestId++;
  const t0 = performance.now();

  const response = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id,
      method,
      params,
    }),
  });

  const durationMs = (performance.now() - t0).toFixed(1);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status} (${durationMs}ms): ${errorText}`);
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(`JSON-RPC Error [${data.error.code}]: ${data.error.message}`);
  }

  return { result: data.result, durationMs };
}

async function main() {
  console.log(`\n Connecting to MCP server at: ${MCP_URL}\n`);

  try {
    // 1. List available tools
    console.log("--------------------------------------------------");
    console.log("1. Testing 'tools/list'...");
    const { result: toolsResult, durationMs: listMs } = await sendRpc("tools/list");
    const tools = toolsResult?.tools || [];
    console.log(` Received ${tools.length} tools in ${listMs}ms:\n`);
    for (const tool of tools) {
      console.log(`   - ${tool.name.padEnd(25)} : ${tool.description?.slice(0, 60)}...`);
    }

    // 2. Call search_concepts
    console.log("\n--------------------------------------------------");
    console.log("2. Testing 'tools/call' -> search_concepts ('GST return')...");
    const { result: searchResult, durationMs: searchMs } = await sendRpc("tools/call", {
      name: "search_concepts",
      arguments: { query: "GST return", limit: 3 },
    });

    const searchData = JSON.parse(searchResult.content?.[0]?.text || "{}");
    console.log(` Search completed in ${searchMs}ms (Total hits: ${searchData.total ?? 0}):\n`);
    (searchData.hits || []).forEach((hit, idx) => {
      console.log(`   [${idx + 1}] ID: ${hit.id}`);
      console.log(`       Title: ${hit.title}`);
      console.log(`       Type:  ${hit.type}`);
      console.log(`       Desc:  ${hit.description?.slice(0, 80)}...`);
    });

    // 3. Call get_concept
    console.log("\n--------------------------------------------------");
    console.log("3. Testing 'tools/call' -> get_concept ('docs/reports/gst-return')...");
    const { result: getResult, durationMs: getMs } = await sendRpc("tools/call", {
      name: "get_concept",
      arguments: { id: "docs/reports/gst-return" },
    });

    const concept = JSON.parse(getResult.content?.[0]?.text || "{}");
    console.log(` Concept fetched in ${getMs}ms:\n`);
    console.log(`   ID:    ${concept.id}`);
    console.log(`   Path:  ${concept.path}`);
    console.log(`   Title: ${concept.frontmatter?.title}`);
    console.log(`   Type:  ${concept.frontmatter?.type}`);
    console.log("\n   Body preview (first 4 lines):");
    const preview = (concept.body || "")
      .split("\n")
      .slice(0, 4)
      .map((l) => `     ${l}`)
      .join("\n");
    console.log(preview);

    console.log("\n--------------------------------------------------");
    console.log(" All MCP tests passed successfully!\n");
  } catch (err) {
    console.error(`\n❌ MCP test failed:`, err.message);
    process.exit(1);
  }
}

main();

