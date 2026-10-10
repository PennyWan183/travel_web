import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n";
import { Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.tips.title };
}

/** Travel tips index. Each topic becomes its own article later. */
export default async function TipsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.tips;

  return (
    <>
      <Header dict={dict} locale={locale} active="tips" />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 pt-16 pb-24">
        <div className="flex flex-col gap-4">
          <h1 className="m-0 font-serif text-[40px] font-normal sm:text-[48px]">{t.title}</h1>
          <p className="m-0 max-w-[40em] text-lg leading-[1.7] text-ink-soft">{t.lead}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {t.topics.map((topic) => (
            <article key={topic.title} className="flex flex-col gap-3 rounded-[20px] border border-glaze-soft bg-white p-7">
              <span className="self-start rounded-full border border-glaze-line px-2.5 py-1 text-xs text-cobalt">{t.comingSoon}</span>
              <h2 className="m-0 font-serif text-[22px] font-normal">{topic.title}</h2>
              <p className="m-0 leading-relaxed text-ink-soft">{topic.text}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
