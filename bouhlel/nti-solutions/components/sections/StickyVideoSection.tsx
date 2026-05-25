import { ShieldCheck, Zap, Globe, Award } from "lucide-react";
import { Img } from "@/components/ui/Img";

const points = [
  {
    icon: ShieldCheck,
    title: "Expertise certifiée",
    body: "Nos ingénieurs sont formés et certifiés sur les équipements Hochiki, Apollo et Dahua. Nous respectons les normes NF EN 54 pour la détection incendie et les standards ISO pour la vidéosurveillance.",
  },
  {
    icon: Zap,
    title: "Réactivité 24/7",
    body: "Notre équipe technique intervient sous 4 heures sur l'ensemble du territoire tunisien. Astreinte 24h/24 pour les systèmes de sécurité critique.",
  },
  {
    icon: Globe,
    title: "Couverture nationale",
    body: "De Tunis à Sfax, de Sousse à Monastir — NTI Solutions déploie et maintient vos systèmes partout en Tunisie, avec un seul interlocuteur.",
  },
  {
    icon: Award,
    title: "Sur-mesure garanti",
    body: "Chaque installation est précédée d'une étude technique approfondie. Nous ne vendons pas de produits génériques — nous concevons des solutions adaptées à votre risque réel.",
  },
];

export function StickyVideoSection() {
  return (
    <section className="bg-[#F2F5F8] section-padding">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — image */}
        <div className="relative hidden lg:block h-[580px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Img
            src="/images/controle-dacces-1.jpg"
            alt="Technicien NTI Solutions en intervention"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2F5F8]/10 to-transparent" />

          {/* Badge overlay */}
          <div className="absolute bottom-8 left-8 bg-white p-5 shadow-xl max-w-[220px]">
            <div className="w-8 h-px bg-[#D4820A] mb-3" />
            <p className="text-xs font-medium tracking-wider uppercase text-[#526272] mb-1">Depuis</p>
            <p
              className="font-semibold text-[#0C1F3D]"
              style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", letterSpacing: "-0.03em", lineHeight: 1 }}
            >
              2013
            </p>
            <p className="text-xs text-[#526272] mt-2">Au service de la sécurité tunisienne</p>
          </div>
        </div>

        {/* Right — points */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Pourquoi NTI Solutions</span>
          </div>

          <h2 className="heading-md text-[#0C1F3D] mb-12">
            L&apos;expertise qui fait la différence.
          </h2>

          <div className="space-y-10">
            {points.map((pt) => (
              <div key={pt.title} className="flex gap-5 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#DDE3EC] flex items-center justify-center group-hover:border-[#D4820A] group-hover:bg-[#D4820A] transition-all duration-300">
                  <pt.icon
                    size={18}
                    className="text-[#D4820A] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-[#0C1F3D] mb-1.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#526272] leading-relaxed">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
