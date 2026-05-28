import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang-context";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { BackToTop } from "@/components/ui/BackToTop";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NTI Solutions — Sécurité & Sûreté en Tunisie",
    template: "%s | NTI Solutions",
  },
  description:
    "NTI Solutions, fondée en 2013, intègre et maintient des systèmes de sécurité et sûreté en Tunisie : détection incendie, vidéosurveillance, contrôle d'accès, désenfumage et lutte contre l'incendie.",
  keywords: [
    "sécurité incendie Tunisie",
    "vidéosurveillance Tunis",
    "contrôle d'accès",
    "NTI Solutions",
    "système sécurité",
    "détection incendie",
    "désenfumage",
  ],
  authors: [{ name: "NTI Solutions" }],
  creator: "NTI Solutions",
  metadataBase: new URL("https://ntisolutions.com.tn"),
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://ntisolutions.com.tn",
    siteName: "NTI Solutions",
    title: "NTI Solutions — Sécurité & Sûreté en Tunisie",
    description:
      "Intégration de solutions électroniques pour la sécurité : incendie, vidéosurveillance, contrôle d'accès.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NTI Solutions — Sécurité & Sûreté en Tunisie",
    description: "Solutions sécurité premium depuis 2013.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-white text-[#0C1F3D] antialiased overflow-x-hidden">
        <LangProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <FloatingContact />
            <ChatWidget />
            <BackToTop />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </LangProvider>
      </body>
    </html>
  );
}
