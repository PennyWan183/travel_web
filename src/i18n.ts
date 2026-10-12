import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import type en from "./dictionaries/en.json";

export const locales = ["en", "id", "ja", "ko", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  id: () => import("./dictionaries/id.json").then((m) => m.default),
  ja: () => import("./dictionaries/ja.json").then((m) => m.default),
  ko: () => import("./dictionaries/ko.json").then((m) => m.default),
  zh: () => import("./dictionaries/zh.json").then((m) => m.default),
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** The current locale, read from the [lang] URL segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

/** UI text for the current locale. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}

/** A string that may be translated into some locales; falls back to English. */
export type Localized = { en: string; id?: string; ja?: string; ko?: string; zh?: string };

/** Shorthand for writing content in all five languages: L(en, zh, ko, id, ja). */
export function L(en: string, zh: string, ko: string, id: string, ja: string): Localized {
  return { en, zh, ko, id, ja };
}

export function pick(text: Localized, locale: Locale): string {
  return text[locale] ?? text.en;
}

/** Prefix an internal path with the locale, e.g. href("ko", "/about") → "/ko/about". */
export function href(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}
