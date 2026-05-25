import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

const services = [
  { label: "Vidéosurveillance", href: "/surete/videosurveillance" },
  { label: "Contrôle d'accès", href: "/surete/controle-acces" },
  { label: "Tourniquets", href: "/surete/controle-acces/tourniquets" },
  { label: "Anti-intrusion", href: "/surete/controle-acces/anti-intrusion" },
  { label: "Détection incendie", href: "/securite/detection-incendie" },
  { label: "Désenfumage", href: "/securite/desenfumage" },
  { label: "Lutte incendie", href: "/securite/lutte-incendie" },
];

const company = [
  { label: "À propos", href: "/a-propos" },
  { label: "Nos valeurs", href: "/a-propos#valeurs" },
  { label: "Recrutement", href: "/recrutement" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C1F3D] text-white">
      {/* Main footer */}
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo nti.png"
                alt="NTI Solutions"
                width={130}
                height={36}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Intégration de solutions électroniques pour la sécurité et la sûreté
              depuis 2013. Experts en sécurité incendie, vidéosurveillance et
              contrôle d&apos;accès en Tunisie.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4820A] animate-pulse" />
              <span className="text-xs text-white/40 tracking-wider uppercase">
                Opérationnel 24/7
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-5">
              Nos solutions
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-[#D4820A] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-5">
              L&apos;entreprise
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-[#D4820A] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">
                  3, Rue Ibrahim Cherif<br />
                  Cité Olympique — 1003 Tunis<br />
                  Tunisie
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 space-y-1">
                  <a href="tel:+21671805945" className="block hover:text-white transition-colors">
                    +216 71 805 945
                  </a>
                  <a
                    href="https://wa.me/21629600424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#25D366] transition-colors"
                  >
                    +216 29 600 424{" "}
                    <span className="text-[10px] text-[#25D366]/70">WhatsApp</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@ntisolutions.com.tn"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  contact@ntisolutions.com.tn
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 space-y-1">
                  <p>Lun–Ven · 9h00–19h00</p>
                  <p>Samedi · 10h00–17h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>
            &copy; {year} NTI Solutions. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
          </div>
          <p>
            3, Rue Ibrahim Cherif — 1003 Tunis, Tunisie
          </p>
        </div>
      </div>
    </footer>
  );
}
