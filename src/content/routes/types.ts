import type { Localized } from "@/i18n";

export type Theme = "nature" | "culture" | "tech";
export type Season = "winter" | "spring" | "summer" | "autumn";

/** A themed journey (multi-day route). Text uses L(en, zh, ko, id, ja). */
export type Route = {
  slug: string;
  theme: Theme;
  /** Seasons this journey is offered in, best first. */
  seasons: Season[];
  /** Photo for cards and the page header, e.g. "/images/routes/harbin.jpg". */
  image?: string;
  /** Describes the photo to add (also its alt text). */
  heroPhoto: Localized;
  name: Localized;
  tagline: Localized;
  intro: Localized;
  facts: { bestTime: Localized; length: Localized; level: Localized; startFrom: Localized };
  highlights: { title: Localized; text: Localized; photo: Localized; image?: string }[];
  itinerary: { title: Localized; text: Localized }[];
  addOn?: { title: Localized; text: Localized };
  weHandle: Localized[];
  goodToKnow: Localized[];
  faq: { q: Localized; a: Localized }[];
};
