"use client";

import { useMemo, useState } from "react";
import { PublicationList } from "@/components/PublicationList";
import type { Publication } from "@/data/publications";

type Filter = "all" | "academic" | "blog";

type Props = {
  all: Publication[];
  academic: Publication[];
  blog: Publication[];
};

export function PublicacionesClient({ all, academic, blog }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(() => {
    if (filter === "academic") return academic;
    if (filter === "blog") return blog;
    return all;
  }, [filter, all, academic, blog]);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {(
          [
            ["all", "Todas", all.length],
            ["academic", "Académicas", academic.length],
            ["blog", "Blog", blog.length],
          ] as const
        ).map(([key, label, count]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === key
                ? "bg-brand-navy text-white"
                : "bg-white text-brand-navy ring-1 ring-brand-navy/10 hover:bg-brand-cream-dark"
            }`}
          >
            {label} ({count})
          </button>
        ))}
      </div>
      <PublicationList items={items} />
    </>
  );
}
