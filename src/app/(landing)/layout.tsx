import { DM_Sans, Source_Serif_4 } from "next/font/google";

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

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} ${sourceSerif.variable} min-h-full antialiased`}
    >
      <a href="#contenido" className="skip-link">
        Ir al contenido
      </a>
      {children}
    </div>
  );
}