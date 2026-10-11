"use client";

import { useState, type CSSProperties } from "react";
import { teamSceneSvg } from "./team-scene-svg";

export type TeamMember = {
  id: "penny" | "holiday" | "cassie";
  name: string;
  role: string;
  line: string;
  speaks: string;
  travelled: string;
};

/** Where each person's card points, in % of the drawing. */
const anchors: Record<TeamMember["id"], { x: number; y: number }> = {
  holiday: { x: 16.1, y: 37.7 },
  penny: { x: 51.3, y: 48.7 },
  cassie: { x: 83.5, y: 37.7 },
};

/**
 * The team as one line-art scene. Hover (desktop), tap (mobile) or focus a
 * person to highlight them and show their card. Names are always listed below.
 */
export function TeamScene({
  members,
  title,
  hint,
  labels,
}: {
  members: TeamMember[];
  title: string;
  hint: string;
  labels: { speaks: string; travelled: string };
}) {
  const [hover, setHover] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = pinned ?? hover;
  const person = members.find((m) => m.id === active);
  const anchor = person ? anchors[person.id] : null;

  const idFrom = (target: EventTarget) => (target as Element).closest?.("[data-person]")?.getAttribute("data-person") ?? null;
  const toggle = (id: string | null) => id && setPinned((p) => (p === id ? null : id));

  return (
    <div className="flex flex-col gap-6">
      <figure
        className="team-scene relative m-0"
        data-active={active ?? undefined}
        onPointerOver={(e) => e.pointerType === "mouse" && setHover(idFrom(e.target))}
        onPointerLeave={() => setHover(null)}
        onFocus={(e) => setHover(idFrom(e.target))}
        onBlur={() => setHover(null)}
        onClick={(e) => toggle(idFrom(e.target))}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            const id = idFrom(e.target);
            if (id) {
              e.preventDefault();
              toggle(id);
            }
          } else if (e.key === "Escape") setPinned(null);
        }}
      >
        <figcaption className="sr-only">{title}</figcaption>
        <svg viewBox="50 40 1150 610" className="block h-auto w-full" dangerouslySetInnerHTML={{ __html: teamSceneSvg }} />
        {person && anchor && (
          <div
            aria-live="polite"
            className="team-card pointer-events-none relative mx-auto mt-3 w-[min(320px,100%)] sm:absolute sm:mt-0 sm:w-[260px] rounded-[14px] border-[1.5px] border-cobalt bg-white px-3.5 py-3 shadow-[0_8px_24px_rgba(31,60,136,0.12)]"
            style={{ "--x": `${Math.min(Math.max(anchor.x, 16), 84)}%`, "--y": `${anchor.y}%` } as CSSProperties}
          >
            <b className="block font-serif text-lg text-cobalt">{person.name}</b>
            <span className="block text-xs tracking-[0.08em] text-cobalt-mid">{person.role}</span>
            <p className="m-0 mt-1.5 mb-2 text-sm leading-snug">{person.line}</p>
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 text-xs text-ink-soft">
              <dt>{labels.speaks}</dt>
              <dd className="m-0 text-ink">{person.speaks}</dd>
              <dt>{labels.travelled}</dt>
              <dd className="m-0 text-ink">{person.travelled}</dd>
            </dl>
          </div>
        )}
      </figure>

      <p className="m-0 text-center text-sm text-ink-soft">{hint}</p>
      <ul className="m-0 flex list-none flex-wrap justify-center gap-2.5 p-0">
        {["holiday", "penny", "cassie"].map((id) => {
          const m = members.find((x) => x.id === id)!;
          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={active === id}
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => toggle(id)}
                className="min-h-11 cursor-pointer rounded-full border border-glaze-soft bg-white px-5 text-[15px] text-ink aria-pressed:border-cobalt aria-pressed:bg-glaze-tint aria-pressed:text-cobalt"
              >
                {m.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
