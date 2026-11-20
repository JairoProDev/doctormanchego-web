import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
        404
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-brand-navy">Página no encontrada</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy-soft"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
