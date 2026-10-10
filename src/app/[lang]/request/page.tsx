import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/config/site";
import { cities } from "@/content/cities";
import { getDictionary, getLocale, href, pick } from "@/i18n";
import { fmt } from "@/lib/format";
import { ContactButtons } from "@/components/ContactButtons";
import { InquiryForm } from "@/components/InquiryForm";
import { WaveBand } from "@/components/Motifs";
import { Eyebrow, Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.request.title };
}

export default async function RequestPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const r = dict.request;
  const vars = { responseTime: site.responseTime };

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <section className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 pt-14 pb-6">
          <Eyebrow>{r.eyebrow}</Eyebrow>
          <h1 className="m-0 font-serif text-[40px] font-normal sm:text-[48px]">{r.title}</h1>
          <p className="m-0 max-w-[40em] text-lg leading-[1.7] text-ink-soft">{r.lead}</p>
        </section>

        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-10 px-6 pt-6 pb-24">
          <div className="min-w-0 flex-[999_1_600px]">
            <Suspense>
              <InquiryForm
                form={dict.form}
                sections={r}
                successText={fmt(dict.form.successText, vars)}
                privacyHref={href(locale, "/privacy")}
                locale={locale}
                quickCities={cities.map((c) => pick(c.name, locale))}
              />
            </Suspense>
          </div>

          <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-5">
            <div className="overflow-hidden rounded-[20px] bg-cobalt text-white">
              <WaveBand light />
              <div className="flex flex-col gap-4 px-7 pt-6 pb-7">
                <h2 className="m-0 font-serif text-[22px] font-normal">{r.nextTitle}</h2>
                <ol className="m-0 flex list-none flex-col gap-4 p-0">
                  {r.next.map((text, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white text-[13px]">
                        {i + 1}
                      </span>
                      <span className="leading-normal text-[#D5DEF2]">{fmt(text, vars)}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 rounded-[20px] border border-glaze-soft bg-white px-7 py-6">
              <h2 className="m-0 font-serif text-xl font-normal">{r.chatTitle}</h2>
              <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{r.chatText}</p>
              <ContactButtons dict={dict} />
            </div>
          </aside>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
