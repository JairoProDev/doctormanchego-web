import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { TopBar } from "@/components/TopBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab, MobileCtaBar } from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MainSiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} ${sourceSerif.variable} flex min-h-full flex-col antialiased`}
    >
      <a href="#contenido" className="skip-link">
        Ir al contenido
      </a>
      <TopBar />
      <SiteHeader />
      <main id="contenido" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}
