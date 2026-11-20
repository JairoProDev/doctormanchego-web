import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import { getAllLandingSlugs, getLandingBySlug } from "@/data/landings";
import { absoluteUrl } from "@/lib/paths";
import { landingWhatsAppMessage, whatsappUrl } from "@/lib/whatsapp";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function pickParam(
  sp: Record<string, string | string[] | undefined>,
  key: string,
): string | undefined {
  const v = sp[key];
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v[0];
  return undefined;
}

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLandingBySlug(slug);
  if (!landing) return {};
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    robots: { index: true, follow: true },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [{ url: absoluteUrl(landing.heroImage) }],
    },
    alternates: { canonical: absoluteUrl(`/c/${slug}`) },
  };
}

export default async function CampaignLandingPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const landing = getLandingBySlug(slug);
  if (!landing) notFound();

  const message = landingWhatsAppMessage(landing.waTopic, landing.campaignId, {
    utm_source: pickParam(sp, "utm_source"),
    utm_campaign: pickParam(sp, "utm_campaign"),
    utm_medium: pickParam(sp, "utm_medium"),
  });
  const whatsappHref = whatsappUrl(message);

  return <LandingTemplate landing={landing} whatsappHref={whatsappHref} />;
}