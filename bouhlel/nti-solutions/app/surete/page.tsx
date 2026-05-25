import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Camera, DoorOpen, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Système de Sûreté",
  description:
    "NTI Solutions intègre des systèmes de sûreté complets en Tunisie : vidéosurveillance IP/CCTV, contrôle d'accès, tourniquets et systèmes anti-intrusion.",
};

const solutions = [
  {
    icon: Camera,
    title: "Vidéosurveillance",
    description:
      "Caméras IP haute résolution, dômes, PTZ et thermiques. Enregistreurs DVR, NVR et XVR. Visualisation à distance via smartphone. Couverture intérieure et extérieure, jour/nuit.",
    href: "/surete/videosurveillance",
    image: "/images/Les caméras Numériques IP.jpg",
    features: ["Caméras IP & CCTV", "DVR / NVR / XVR", "Surveillance mobile", "Infrarouge & thermique"],
  },
  {
    icon: DoorOpen,
    title: "Contrôle d'accès",
    description:
      "Tourniquets barreaudés, tripodes et couloirs sécurisés. Lecteurs biométriques et cartes RFID. Gestion centralisée des droits d'accès pour entreprises, stades et sites industriels.",
    href: "/surete/controle-acces",
    image: "/images/controle-dacces-1.jpg",
    features: ["Tourniquets & portiques", "Biométrie & RFID", "Barrières véhicules", "Gestion des rondes"],
  },
  {
    icon: Shield,
    title: "Anti-intrusion",
    description:
      "Systèmes d'alarme filaires et sans fil, détecteurs IR, contacts magnétiques, sirènes et transmetteurs GSM. Double technologie pour zéro fausse alarme.",
    href: "/surete/controle-acces/anti-intrusion",
    image: "/images/PORTES.jpg",
    features: ["Alarmes filaires & sans fil", "Détecteurs IR & hyperfréquence", "Transmetteur GSM", "Centrale d'alarme"],
  },
];

export default function SuretePage() {
  return (
    <>
      <PageHeader
        title="Système de sûreté."
        subtitle="Vidéosurveillance, contrôle d'accès et anti-intrusion — des solutions intégrées pour sécuriser vos accès, surveiller vos espaces et dissuader les intrusions."
        breadcrumbs={[{ label: "Sûreté" }]}
        image="/images/controle-dacces-1.jpg"
        tag="Sûreté électronique"
      />

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Vue d&apos;ensemble</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Protéger les accès, surveiller les espaces.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Les systèmes de sûreté de NTI Solutions couvrent l&apos;intégralité
                de la chaîne : de la détection d&apos;une intrusion à l&apos;enregistrement
                vidéo, en passant par le contrôle et la traçabilité des accès.
              </p>
              <p className="text-base text-[#526272] leading-relaxed">
                Chaque solution est dimensionnée selon votre environnement
                (superficie, nombre d&apos;accès, niveau de risque) et intégrée
                avec les équipements existants si nécessaire.
              </p>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/systeme-de-comtrole-de-ronde-1.jpg"
                alt="Système de contrôle de ronde NTI"
                className="w-full h-[360px] object-cover"
               loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group border border-[#DDE3EC] hover:border-[#D4820A] transition-all duration-300 card-lift img-zoom-wrap"
              >
                <div className="h-52 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="zoom-target w-full h-full object-cover"
                   loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-[#D4820A] flex items-center justify-center">
                      <sol.icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-6 h-px bg-[#D4820A] mb-3 group-hover:w-10 transition-all duration-300" />
                  <h3 className="font-semibold text-[#0C1F3D] text-lg mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                    {sol.title}
                  </h3>
                  <p className="text-sm text-[#526272] leading-relaxed mb-5">{sol.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#526272]">
                        <span className="w-1.5 h-1.5 bg-[#D4820A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center gap-2 text-sm text-[#D4820A] font-medium group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
