import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/data/site";

const bodySchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(8000),
  company: z.string().optional(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ error: "Revise los campos del formulario." }, { status: 400 });
  }

  if (parsed.data.company && parsed.data.company.length > 0) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Formulario temporalmente no disponible. Escríbanos por WhatsApp al 939 247 994.",
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: parsed.data.email,
    subject: `[Web Dr. Manchego] ${parsed.data.name}`,
    text: `De: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
  });

  if (error) {
    return Response.json({ error: error.message || "Error al enviar." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
