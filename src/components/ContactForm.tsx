"use client";

import { useState } from "react";
import { publicPath } from "@/lib/paths";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };
    try {
      const res = await fetch(publicPath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setError(json.error ?? "No se pudo enviar. Intente por WhatsApp.");
        setStatus("error");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setError("Error de red. Use WhatsApp para contacto inmediato.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand-navy">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          className="mt-1 w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-navy">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-navy">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Motivo de consulta, horario preferido…"
          className="mt-1 w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-teal"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-navy py-3 text-sm font-semibold text-white hover:bg-brand-navy-soft disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-brand-teal">Mensaje enviado. Le responderemos pronto.</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-700">{error}</p> : null}
    </form>
  );
}
