"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/data/faq";

type Props = {
  items: FaqItem[];
  limit?: number;
};

export function FaqAccordion({ items, limit }: Props) {
  const baseId = useId();
  const list = limit ? items.slice(0, limit) : items;
  const [openId, setOpenId] = useState<string | null>(list[0]?.id ?? null);

  return (
    <div className="divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white">
      {list.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-navy transition hover:bg-brand-cream/80 sm:text-base"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                {item.question}
                <span
                  className={`shrink-0 text-brand-teal transition ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-brand-navy/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
