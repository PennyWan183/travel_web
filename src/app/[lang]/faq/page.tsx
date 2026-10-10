import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, getLocale, href } from "@/i18n";
import { Footer, Header } from "@/components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.faq.title };
}

export default async function FaqPage() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Header dict={dict} locale={locale} active="faq" />
      <main className="mx-auto flex w-full max-w-[880px] flex-col gap-5 px-6 pt-16 pb-24">
        <h1 className="m-0 mb-4 font-serif text-[40px] font-normal sm:text-[48px]">{dict.faq.title}</h1>
        {dict.faq.items.map((item) => (
          <details key={item.q} className="rounded-2xl border border-glaze-soft bg-white px-5.5 py-4.5">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="m-0 mt-3 leading-[1.7] text-ink-soft">{item.a}</p>
          </details>
        ))}
        <p className="mt-6">
          <Link href={href(locale, "/request")}>{dict.common.sendRequest} →</Link>
        </p>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
