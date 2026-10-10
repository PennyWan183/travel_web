/** Fill {placeholders} in a translated string, e.g. fmt("Plan {city}", { city: "Xi'an" }). */
export function fmt(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
