import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { locales, type Locale } from "@/i18n";

/**
 * "Explore China" articles live in /content/explore/<slug>/<language>.md
 * (en.md, zh.md, ko.md, id.md, ja.md). See /content/explore/README.md.
 */
const ROOT = path.join(process.cwd(), "content", "explore");

/** Drafts are visible on the test site and locally, never on the live site. */
export const showDrafts = process.env.VERCEL_ENV !== "production";

export type AuthorId = "penny" | "holiday" | "cassie";

export type ArticleMeta = {
  slug: string;
  locale: Locale;
  title: string;
  /** Short place name for headings, e.g. "Yunnan" (defaults to the title). */
  place: string;
  summary: string;
  cover?: string;
  /** YouTube video id (the part after watch?v=). Empty = "video coming soon". */
  video?: string;
  author?: AuthorId;
  date?: string;
  /** Slug of the parent article, e.g. a city's province. */
  parent?: string;
  /** Journeys (route slugs) to suggest at the end. */
  journeys: string[];
  /** Sort order within its level (smaller first). */
  order: number;
  draft: boolean;
  /** Minutes to read, estimated from the text. */
  minutes: number;
};

export type Article = ArticleMeta & { body: string; /** true when this is the English fallback */ fallback: boolean };

function slugs(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function minutesToRead(text: string): number {
  // Latin words plus CJK characters (read at roughly 2.5 per word).
  const words = (text.match(/[A-Za-zÀ-ž0-9'-]+/g) ?? []).length;
  const cjk = (text.match(/[぀-ヿ㐀-鿿가-힯]/g) ?? []).length;
  return Math.max(1, Math.round((words + cjk / 2.5) / 220));
}

function read(slug: string, locale: Locale): Article | undefined {
  const file = path.join(ROOT, slug, `${locale}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    locale,
    title: String(data.title ?? slug),
    place: String(data.place ?? data.title ?? slug),
    summary: String(data.summary ?? ""),
    cover: data.cover || undefined,
    // No `video:` line = no video; `video: ""` = a "video coming soon" frame.
    video: data.video === undefined ? undefined : String(data.video ?? ""),
    author: data.author,
    date: data.date ? String(data.date) : undefined,
    parent: data.parent || undefined,
    journeys: Array.isArray(data.journeys) ? data.journeys.map(String) : [],
    order: Number(data.order ?? 100),
    draft: Boolean(data.draft),
    minutes: minutesToRead(content),
    body: content,
    fallback: false,
  };
}

/** One article in the visitor's language, or the English version if it isn't translated yet. */
export function getArticle(slug: string, locale: Locale): Article | undefined {
  const article = read(slug, locale) ?? (locale !== "en" ? read(slug, "en") : undefined);
  if (!article || (article.draft && !showDrafts)) return undefined;
  return { ...article, fallback: article.locale !== locale };
}

/** Articles available in this language (untranslated ones are left out of lists). */
export function listArticles(locale: Locale): ArticleMeta[] {
  return slugs()
    .map((slug) => read(slug, locale))
    .filter((a): a is Article => !!a && (!a.draft || showDrafts))
    .sort((a, b) => a.order - b.order)
    .map(({ body: _body, fallback: _fallback, ...meta }) => meta);
}

/**
 * Slugs to pre-render: every article with an English version, drafts included
 * (on the live site a draft simply renders "not found"). Never empty, because
 * the framework needs at least one.
 */
export function allArticleSlugs(): string[] {
  const list = slugs().filter((slug) => read(slug, "en"));
  return list.length > 0 ? list : ["_"];
}

/** Whether the Explore section has anything to show (hides the menu item if not). */
export function hasArticles(): boolean {
  return locales.some((l) => listArticles(l).length > 0);
}
