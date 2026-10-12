import type { Metadata } from "next";
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/600.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import "../globals.css";
import { getDictionary, getLocale, locales } from "@/i18n";
import { site } from "@/config/site";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: { default: dict.meta.title, template: `%s · ${site.name}` },
    description: dict.meta.description,
    metadataBase: new URL(site.url),
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    // Keep preview / test deployments out of search results.
    robots: process.env.VERCEL_ENV === "production" ? undefined : { index: false, follow: false },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  return (
    <html lang={locale === "zh" ? "zh-CN" : locale}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
