import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoute } from "@/content/routes";
import { getDictionary, getLocale, href } from "@/i18n";
import { allArticleSlugs, getArticle, listArticles } from "@/lib/articles";
import { fmt } from "@/lib/format";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { PhotoSlot } from "@/components/Motifs";
import { RouteCard } from "@/components/RouteCard";
import { CtaPanel, Footer, Header } from "@/components/SiteChrome";
import { YouTube } from "@/components/YouTube";

export async function generateStaticParams() {
  return allArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/explore/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug, await getLocale());
  return article ? { title: article.title, description: article.summary } : {};
}

const authorNames = { penny: "Penny", holiday: "Holiday", cassie: "Cassie" } as const;

export default async function ArticlePage({ params }: PageProps<"/[lang]/explore/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const article = getArticle(slug, locale);
  if (!article) notFound();

  const dict = await getDictionary();
  const e = dict.explore;
  const parent = article.parent ? getArticle(article.parent, locale) : undefined;
  const children = listArticles(locale).filter((a) => a.parent === article.slug);
  const journeys = article.journeys.map(getRoute).filter((r) => r !== undefined);
  const author = article.author ? authorNames[article.author] : undefined;
  const textLang = article.locale === "zh" ? "zh-CN" : article.locale;

  return (
    <>
      <Header dict={dict} locale={locale} active="explore" />
      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-6 pt-5 text-sm text-ink-soft">
          <Link href={href(locale, "/explore")} className="no-underline">
            {dict.nav.explore}
          </Link>
          {parent && (
            <>
              {" / "}
              <Link href={href(locale, `/explore/${parent.slug}`)} className="no-underline">
                {parent.title}
              </Link>
            </>
          )}
        </nav>

        <article lang={textLang} className="mx-auto flex max-w-[860px] flex-col gap-8 px-6 pt-10 pb-16">
          {article.fallback && (
            <p lang={locale} className="m-0 rounded-2xl border border-glaze-line bg-glaze-tint px-5 py-3.5 text-sm text-cobalt-deep">
              {e.fallbackNote}
            </p>
          )}

          <header className="flex flex-col gap-4">
            {article.draft && (
              <span className="self-start rounded-full bg-[#FFF1C9] px-3 py-1 text-xs font-semibold text-ink">{e.draft}</span>
            )}
            <h1 className="m-0 font-serif text-[38px] leading-[1.15] font-normal sm:text-[50px]">{article.title}</h1>
            {article.summary && <p className="m-0 font-serif text-xl leading-snug text-cobalt">{article.summary}</p>}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
              {author && (
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="plate-frame flex h-10 w-10 items-center justify-center font-serif text-lg text-cobalt">
                    {author[0]}
                  </span>
                  {fmt(e.by, { name: author })}
                </span>
              )}
              <span>{fmt(e.minRead, { n: String(article.minutes) })}</span>
            </div>
          </header>

          {article.video !== undefined ? (
            <YouTube id={article.video} title={article.title} playLabel={e.play} soonLabel={e.videoSoon} />
          ) : (
            article.cover && <PhotoSlot src={article.cover} label={article.title} className="tile-frame aspect-[16/9] w-full rounded-[20px]" />
          )}

          <ArticleBody markdown={article.body} labels={{ play: e.play, soon: e.videoSoon, short: e.short }} />
        </article>

        {children.length > 0 && (
          <section className="border-t border-glaze-soft bg-white px-6 py-16">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-7">
              <h2 className="m-0 font-serif text-[32px] font-normal">{article.slug === "china" ? e.provincesTitle : fmt(e.insideTitle, { place: article.place })}</h2>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
                {children.map((c) => (
                  <ArticleCard key={c.slug} article={c} dict={dict} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}

        {journeys.length > 0 && (
          <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 py-16">
            <h2 className="m-0 font-serif text-[32px] font-normal">{e.journeysTitle}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
              {journeys.map((r) => (
                <RouteCard key={r.slug} route={r} dict={dict} locale={locale} />
              ))}
            </div>
          </section>
        )}

        <CtaPanel>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex max-w-[36em] flex-col gap-2">
              <h2 className="m-0 font-serif text-[30px] font-normal">{e.planTitle}</h2>
              <p className="m-0 leading-relaxed text-[#D5DEF2]">{e.planText}</p>
            </div>
            <Link
              href={href(locale, `/request?dest=${encodeURIComponent(article.title)}`)}
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-cobalt no-underline hover:bg-glaze-tint"
            >
              {dict.common.sendRequest}
            </Link>
          </div>
        </CtaPanel>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
