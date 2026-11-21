"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { publicPath } from "@/lib/paths";

type Props = {
  images: string[];
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function ServiceCardMedia({
  images,
  alt,
  priority,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: Props) {
  const unique = useMemo(() => [...new Set(images.filter(Boolean))], [images]);
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    if (unique.length <= 1) return;
    setIndex((i) => (i + 1) % unique.length);
  }, [unique.length]);

  const src = unique[index] ?? unique[0];

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={advance}
      onFocus={advance}
    >
      <Image
        key={src}
        src={publicPath(src)}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-500"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}