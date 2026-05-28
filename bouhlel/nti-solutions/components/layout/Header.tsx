"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Img } from "@/components/ui/Img";
import { useLang } from "@/lib/lang-context";
import type { Lang } from "@/lib/types";

const LANG_LABELS: Record<Lang, string> = { fr: "FR", en: "EN", ar: "ع" };

const T = {
  fr: {
    surete: "Sûreté",
    securite: "Sécurité",
    catalogue: "Catalogue",
    about: "À propos",
    recrutement: "Recrutement",
    contact: "Contact",
    videosurveillance: "Vidéosurveillance",
    controleAcces: "Contrôle d'accès",
    tourniquets: "Tourniquets",
    antiIntrusion: "Anti-intrusion",
    detectionIncendie: "Détection incendie",
    conventionnel: "Système conventionnel",
    adressable: "Système adressable",
    desenfumage: "Désenfumage",
    lutteIncendie: "Lutte incendie",
    cta: "Demander un devis",
  },
  en: {
    surete: "Safety",
    securite: "Security",
    catalogue: "Catalogue",
    about: "About",
    recrutement: "Careers",
    contact: "Contact",
    videosurveillance: "Video Surveillance",
    controleAcces: "Access Control",
    tourniquets: "Turnstiles",
    antiIntrusion: "Anti-Intrusion",
    detectionIncendie: "Fire Detection",
    conventionnel: "Conventional System",
    adressable: "Addressable System",
    desenfumage: "Smoke Extraction",
    lutteIncendie: "Fire Fighting",
    cta: "Request a quote",
  },
  ar: {
    surete: "الأمن",
    securite: "السلامة",
    catalogue: "كتالوج",
    about: "من نحن",
    recrutement: "وظائف",
    contact: "اتصل بنا",
    videosurveillance: "مراقبة بالكاميرا",
    controleAcces: "التحكم في الدخول",
    tourniquets: "بوابات دوارة",
    antiIntrusion: "ضد الاقتحام",
    detectionIncendie: "كشف الحريق",
    conventionnel: "نظام تقليدي",
    adressable: "نظام عنواني",
    desenfumage: "تصريف الدخان",
    lutteIncendie: "إطفاء الحريق",
    cta: "طلب عرض سعر",
  },
} as const;

function getNavigation(lang: Lang) {
  const t = T[lang];
  return [
    {
      label: t.surete,
      href: "/surete",
      children: [
        { label: t.videosurveillance, href: "/surete/videosurveillance" },
        { label: t.controleAcces, href: "/surete/controle-acces" },
        { label: t.tourniquets, href: "/surete/controle-acces/tourniquets" },
        { label: t.antiIntrusion, href: "/surete/controle-acces/anti-intrusion" },
      ],
    },
    {
      label: t.securite,
      href: "/securite",
      children: [
        { label: t.detectionIncendie, href: "/securite/detection-incendie" },
        { label: t.conventionnel, href: "/securite/detection-incendie/conventionnel" },
        { label: t.adressable, href: "/securite/detection-incendie/adressable" },
        { label: t.desenfumage, href: "/securite/desenfumage" },
        { label: t.lutteIncendie, href: "/securite/lutte-incendie" },
      ],
    },
    { label: t.catalogue, href: "/produits" },
    { label: t.about, href: "/a-propos" },
    { label: t.recrutement, href: "/recrutement" },
    { label: t.contact, href: "/contact" },
  ];
}

export function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = getNavigation(lang);
  const t = T[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#DDE3EC] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Img
              src="/images/logo nti.png"
              alt="NTI Solutions"
              width={140}
              height={40}
              className={`block w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-9 brightness-100" : "h-10 brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`nav-link flex items-center gap-1 transition-colors duration-300 ${
                    scrolled ? "text-[#0C1F3D]" : "text-white"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 w-56 bg-white border border-[#DDE3EC] shadow-xl py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-[#0C1F3D] hover:text-[#D4820A] hover:bg-[#F4F6F9] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang switcher */}
            <div className="flex items-center border border-white/20 overflow-hidden">
              {(["fr", "en", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
                    lang === l
                      ? scrolled
                        ? "bg-[#0C1F3D] text-white"
                        : "bg-white/20 text-white"
                      : scrolled
                      ? "text-[#526272] hover:text-[#0C1F3D] hover:bg-[#F4F6F9]"
                      : "text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={l === "fr" ? "Français" : l === "en" ? "English" : "العربية"}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/21629600424"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                scrolled ? "text-[#526272]" : "text-white/80"
              } hover:text-[#25D366]`}
            >
              <Phone size={14} />
              +216 29 600 424
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              {t.cta}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-[#0C1F3D]" : "text-white"
            }`}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#0C1F3D] flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              {(["fr", "en", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); }}
                  className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
                    lang === l
                      ? "border-[#D4820A] text-[#D4820A]"
                      : "border-white/20 text-white/40 hover:text-white hover:border-white/40"
                  }`}
                >
                  {l === "fr" ? "Français" : l === "en" ? "English" : "العربية"}
                </button>
              ))}
            </div>

            <nav className="flex flex-col gap-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-display font-semibold text-white border-b border-white/10 hover:text-[#D4820A] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-base text-white/50 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex flex-col gap-4">
              <a href="tel:+21671805945" className="flex items-center gap-3 text-white/60">
                <Phone size={16} />
                +216 71 805 945
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary justify-center text-center"
              >
                {t.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
