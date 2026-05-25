import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez NTI Solutions pour un devis, une information ou une demande de maintenance. Réponse garantie sous 24h. Tél : +216 71 805 945.",
};

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["3, Rue Ibrahim Cherif", "Cité Olympique — 1003 Tunis", "Tunisie"],
  },
  {
    icon: Phone,
    label: "Téléphones",
    lines: ["+216 71 805 945 (fixe)", "+216 29 600 424 (WhatsApp)", "+216 71 805 944 (fax)"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@ntisolutions.com.tn"],
  },
  {
    icon: Clock,
    label: "Horaires",
    lines: ["Lundi–Vendredi · 9h00–19h00", "Samedi · 10h00–17h00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contactez-nous."
        subtitle="Notre équipe répond à votre demande sous 24 heures ouvrées. Pour les urgences techniques, appelez directement le +216 29 600 424."
        breadcrumbs={[{ label: "Contact" }]}
        image="/images/systeme-de-comtrole-de-ronde-1.jpg"
        tag="Nous contacter"
      />

      {/* Contact grid */}
      <section className="bg-white section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Form — wider */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Envoyez-nous un message</span>
            </div>
            <h2 className="heading-sm text-[#0C1F3D] mb-8">
              Parlez-nous de votre projet.
            </h2>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Nos coordonnées</span>
            </div>
            <h2 className="heading-sm text-[#0C1F3D] mb-8">
              Plusieurs façons de nous joindre.
            </h2>

            <div className="space-y-8">
              {infos.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#DDE3EC] flex items-center justify-center">
                    <info.icon size={18} className="text-[#D4820A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-[#526272] mb-2">
                      {info.label}
                    </p>
                    {info.lines.map((line, i) => {
                      if (line.includes("71 805 945"))
                        return <a key={i} href="tel:+21671805945" className="block text-sm text-[#0C1F3D] leading-relaxed hover:text-[#D4820A] transition-colors">{line}</a>;
                      if (line.includes("29 600 424"))
                        return <a key={i} href="https://wa.me/21629600424" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#0C1F3D] leading-relaxed hover:text-[#25D366] transition-colors">{line}</a>;
                      if (line.includes("71 805 944"))
                        return <a key={i} href="tel:+21671805944" className="block text-sm text-[#0C1F3D] leading-relaxed hover:text-[#D4820A] transition-colors">{line}</a>;
                      return <p key={i} className="text-sm text-[#0C1F3D] leading-relaxed">{line}</p>;
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="mt-10 border border-[#DDE3EC] p-6">
              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#0C1F3D] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Réponse garantie sous 24h
                  </p>
                  <p className="text-xs text-[#526272] leading-relaxed">
                    Tous les messages reçus entre 9h et 18h sont traités le jour même.
                    Pour les urgences, appelez directement notre ligne mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#F2F5F8] section-padding-sm">
        <div className="container-wide">
          <div className="h-64 bg-[#DDE3EC] flex items-center justify-center border border-[#DDE3EC]">
            <div className="text-center">
              <MapPin size={32} className="text-[#D4820A] mx-auto mb-3" />
              <p className="text-sm font-medium text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>
                3, Rue Ibrahim Cherif — Cité Olympique
              </p>
              <p className="text-xs text-[#526272]">1003 Tunis, Tunisie</p>
              <a
                href="https://maps.google.com/?q=3+Rue+Ibrahim+Cherif+Cité+Olympique+Tunis+Tunisie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs text-[#D4820A] hover:underline"
              >
                Voir sur Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
