import { helpSource } from "@/lib/source";
import {
  getHelpBreadcrumbs,
  getHelpFaqs,
  readTags,
  resolveRelatedDocs,
} from "@/lib/help";
import { HelpFaqList } from "@/components/help/faq-list";
import { HelpContact } from "@/components/help/contact";
import { HelpRelatedDocs } from "@/components/help/related-docs";
import { HelpTag } from "@/components/help/chip";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { getMdxComponents } from "@/lib/mdx-components";
import { OG_IMAGES } from "@/lib/og";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CircleHelp } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function HelpPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const faqs = await getHelpFaqs();
    return (
      <div>
        <div className="mb-8">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <CircleHelp className="h-3.5 w-3.5" aria-hidden />
            Help Center
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            How can we help?
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Search frequently asked questions, or browse by section. Each answer
            links to the full documentation when you want more detail.
          </p>
        </div>
        <HelpFaqList items={faqs} />
        <HelpContact className="mt-12" />
      </div>
    );
  }

  const page = helpSource.getPage(slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const breadcrumbs = getHelpBreadcrumbs(slug);
  const tags = readTags(page.data);
  const related = resolveRelatedDocs(page.data.related);

  return (
    <article>
      <Link
        href="/help"
        className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All questions
      </Link>

      <header className="rounded-2xl border border-primary/15 bg-primary-light px-5 py-6 sm:px-7 sm:py-8">
        <Breadcrumbs items={breadcrumbs} className="mb-0" />
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
          {page.data.title}
        </h1>
        {page.data.description && (
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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

      <HelpRelatedDocs items={related} />
      <HelpContact className="mt-12" />
    </article>
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
      "Search frequently asked questions about MediFlux, grouped by section.";
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
