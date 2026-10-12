import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDictionary, getLocale } from "@/i18n";
import { fmt } from "@/lib/format";
import { Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.legal.termsTitle };
}

/** Plain-language summary. Replace with a full legal text when the business details are settled. */
export default async function LegalPage() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="mx-auto flex w-full max-w-[880px] flex-col gap-5 px-6 pt-16 pb-24">
        <h1 className="m-0 font-serif text-[40px] font-normal">{dict.legal.termsTitle}</h1>
        {dict.legal.termsBody.map((para) => (
          <p key={para} className="m-0 leading-[1.7] text-ink-soft">
            {fmt(para, { email: site.email })}
          </p>
        ))}
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
