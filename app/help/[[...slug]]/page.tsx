import { helpSource } from "@/lib/source";
import {
  getHelpBreadcrumbs,
  readTags,
  resolveRelatedDocs,
} from "@/lib/help";
import { HelpCenter } from "@/components/help/help-center";
import {
  HelpArticleFeedback,
  HelpArticleLayout,
  type HelpArticleSibling,
} from "@/components/help/help-article-layout";
import { HelpContact } from "@/components/help/contact";
import { HelpTag } from "@/components/help/chip";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import {
  FAQ_RECORDS,
  HELP_CATEGORIES,
  type CategoryId,
} from "@/lib/help-faqs-data";
import { getMdxComponents } from "@/lib/mdx-components";
import { estimateReadingTime } from "@/lib/utils";
import { OG_IMAGES } from "@/lib/og";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function HelpPage({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const search = await searchParams;
    const topic = Array.isArray(search.topic) ? search.topic[0] : search.topic;
    const initialCategory =
      HELP_CATEGORIES.find((category) => category.id === topic)?.id ?? null;
    return <HelpCenter initialCategory={initialCategory} />;
  }

  const page = helpSource.getPage(slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const breadcrumbs = getHelpBreadcrumbs(slug);
  const tags = readTags(page.data);
  const related = resolveRelatedDocs(page.data.related);
  const articleText = await page.data.getText("processed");
  const readingTime = estimateReadingTime(articleText);
  const currentSlug = page.slugs.at(-1) ?? slug.at(-1) ?? "";
  const currentFaq = FAQ_RECORDS.find(
    (faq) =>
      faq.slug === currentSlug ||
      faq.title === page.data.title ||
      faq.fullGuideHref === page.url
  );
  const sectionCategory: Partial<Record<string, CategoryId>> = {
    "getting-started": "getting-started",
    account: "account-users",
    inventory: "inventory-expiry",
    purchases: "purchases-suppliers",
    sales: "billing-gst",
    ledgers: "purchases-suppliers",
  };
  const category = HELP_CATEGORIES.find(
    (item) =>
      item.id ===
      (currentFaq?.categoryId ?? sectionCategory[page.slugs[0] ?? ""])
  );
  const questionId = currentFaq?.id ?? `q-${currentSlug}`;
  const helpPages = helpSource
    .getPages()
    .filter((helpPage) => helpPage.slugs.at(-1) !== "index");
  const siblings: HelpArticleSibling[] = category
    ? FAQ_RECORDS.filter((faq) => faq.categoryId === category.id).flatMap(
        (faq) => {
          const siblingPage =
            faq.id === currentFaq?.id
              ? page
              : helpPages.find(
                  (helpPage) => helpPage.slugs.at(-1) === faq.slug
                ) ??
                helpPages.find((helpPage) => helpPage.data.title === faq.title);
          return siblingPage
            ? [{ id: faq.id, title: faq.title, url: siblingPage.url }]
            : [];
        }
      )
    : [];
  if (
    category &&
    !siblings.some((sibling) => sibling.id === questionId)
  ) {
    siblings.unshift({
      id: questionId,
      title: page.data.title,
      url: page.url,
    });
  }
  const toc = Array.isArray(page.data.toc)
    ? page.data.toc
        .flatMap((item) =>
          (item.depth === 2 || item.depth === 3) &&
          typeof item.title === "string"
            ? [{ title: item.title, url: item.url, depth: item.depth }]
            : []
        )
    : [];

  return (
    <HelpArticleLayout
      category={category}
      siblings={siblings}
      currentQuestionId={questionId}
      toc={toc}
      related={related}
      readingTime={readingTime}
      updatedAt={page.data.updatedAt}
    >
      <article className="min-w-0">
        <Link
          href="/help"
          className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All questions
        </Link>

        <header className="min-w-0 rounded-2xl border border-primary/15 bg-primary-light px-5 py-6 sm:px-7 sm:py-8">
          {category && (
            <div className="mb-3">
              <HelpTag>{category.name}</HelpTag>
            </div>
          )}
          <Breadcrumbs items={breadcrumbs} className="mb-0" />
          <h1 className="mt-3 break-words text-2xl font-bold tracking-tight text-heading sm:text-3xl">
            {page.data.title}
          </h1>
          {page.data.description && (
            <p className="mt-2 max-w-2xl break-words text-base leading-relaxed text-muted-foreground sm:text-lg">
              {page.data.description}
            </p>
          )}
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <HelpTag key={tag}>{tag}</HelpTag>
              ))}
            </div>
          )}
        </header>

        <div className="mdx-content mt-8 min-w-0 max-w-full">
          <MDXContent components={getMdxComponents()} />
        </div>

        <HelpArticleFeedback key={questionId} questionId={questionId} />
        <HelpContact className="mt-12" />
      </article>
    </HelpArticleLayout>
  );
}

export async function generateStaticParams() {
  return [{ slug: [] as string[] }, ...helpSource.generateParams()];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const title = "Help & FAQs";
    const description =
      "Instant answers for MediFlux pharmacy management, billing, GST, inventory, and accounts.";
    const url = `${SITE_URL}/help`;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        siteName: "MediFlux Docs",
        locale: "en_IN",
        title,
        description,
        url,
        images: OG_IMAGES,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: OG_IMAGES,
      },
    };
  }

  const page = helpSource.getPage(slug);
  if (!page) return {};

  const title = page.data.title;
  const description = page.data.description;
  const url = `${SITE_URL}${page.url}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "MediFlux Docs",
      locale: "en_IN",
      title,
      description,
      url,
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: OG_IMAGES,
    },
  };
}
