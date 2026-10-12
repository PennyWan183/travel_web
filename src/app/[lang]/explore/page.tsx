import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n";
import { listArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Eyebrow, Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.explore.title, description: dict.explore.lead };
}

/** The China overview has slug "china"; provinces have `parent: china`. */
export default async function ExplorePage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const e = dict.explore;
  const articles = listArticles(locale);
  const overview = articles.find((a) => a.slug === "china");
  const provinces = articles.filter((a) => a.parent === "china");

  return (
    <>
      <Header dict={dict} locale={locale} active="explore" />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pt-16 pb-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{e.eyebrow}</Eyebrow>
          <h1 className="m-0 font-serif text-[40px] leading-[1.15] font-normal sm:text-[52px]">{e.title}</h1>
          <p className="m-0 max-w-[40em] text-lg leading-[1.7] text-ink-soft">{e.lead}</p>
        </div>

        {overview && <ArticleCard article={overview} dict={dict} locale={locale} large />}

        {provinces.length > 0 && (
          <section className="flex flex-col gap-7">
            <h2 className="m-0 border-b border-glaze-soft pb-4 font-serif text-[32px] font-normal">{e.provincesTitle}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
              {provinces.map((a) => (
                <ArticleCard key={a.slug} article={a} dict={dict} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {!overview && provinces.length === 0 && <p className="m-0 text-center text-ink-soft">{e.comingSoon}</p>}
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
