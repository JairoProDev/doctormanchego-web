"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { publicPath } from "@/lib/paths";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/publicaciones", label: "Publicaciones" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-50 border-b border-brand-navy/5 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-teal/30">
            <Image
              src={publicPath("/images/hero-dr-manchego.webp")}
              alt=""
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-base font-bold tracking-tight text-brand-navy group-hover:text-brand-teal sm:text-lg">
              {site.name}
            </span>
            <span className="block truncate text-[10px] font-medium uppercase tracking-[0.18em] text-brand-sage">
              Radiólogo y de familia · Cusco
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand-navy text-white"
                    : "text-brand-navy/80 hover:bg-brand-cream-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <details className="relative lg:hidden">
      <summary className="list-none cursor-pointer rounded-lg border border-brand-navy/10 bg-white px-3 py-2 text-sm font-semibold text-brand-navy marker:hidden [&::-webkit-details-marker]:hidden">
        Menú
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-black/8 bg-white py-2 shadow-xl">
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 text-sm ${
                active ? "bg-brand-cream font-semibold text-brand-teal" : "hover:bg-brand-cream/70"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </details>
  );
}
