import Link from "next/link";
import { getDictionary, getLocale, href } from "@/i18n";
import { Footer, Header } from "@/components/SiteChrome";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="mx-auto flex w-full max-w-[880px] flex-col items-center gap-5 px-6 py-24 text-center">
        <h1 className="m-0 font-serif text-[40px] font-normal">{dict.notFound.title}</h1>
        <p className="m-0 text-lg text-ink-soft">{dict.notFound.text}</p>
        <Link href={href(locale)}>{dict.notFound.home}</Link>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
