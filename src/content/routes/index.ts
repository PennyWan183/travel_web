import { fujian } from "./fujian";
import { harbin } from "./harbin";
import type { Route, Season, Theme } from "./types";
import { northernXinjiang } from "./xinjiang";
import { yunnan } from "./yunnan";

export type { Route, Season, Theme };

/** All journeys, in the order they appear on the site. */
export const routes: Route[] = [harbin, northernXinjiang, yunnan, fujian];

export const themes: Theme[] = ["nature", "culture", "tech"];

export function getRoute(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}
