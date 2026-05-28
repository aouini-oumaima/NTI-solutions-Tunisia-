"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    label: "Sûreté",
    href: "/surete",
    children: [
      { label: "Vidéosurveillance", href: "/surete/videosurveillance" },
      { label: "Contrôle d'accès", href: "/surete/controle-acces" },
      { label: "Tourniquets", href: "/surete/controle-acces/tourniquets" },
      { label: "Anti-intrusion", href: "/surete/controle-acces/anti-intrusion" },
    ],
  },
  {
    label: "Sécurité",
    href: "/securite",
    children: [
      { label: "Détection incendie", href: "/securite/detection-incendie" },
      { label: "Système conventionnel", href: "/securite/detection-incendie/conventionnel" },
      { label: "Système adressable", href: "/securite/detection-incendie/adressable" },
      { label: "Désenfumage", href: "/securite/desenfumage" },
      { label: "Lutte incendie", href: "/securite/lutte-incendie" },
    ],
  },
  { label: "Catalogue", href: "/produits" },
  { label: "À propos", href: "/a-propos" },
  { label: "Recrutement", href: "/recrutement" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
              Demander un devis
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
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
