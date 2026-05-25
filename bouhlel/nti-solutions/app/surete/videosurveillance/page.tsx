import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Camera, Monitor, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Vidéosurveillance",
  description:
    "Systèmes de vidéosurveillance IP par NTI Solutions : caméras haute résolution, PTZ, dômes, thermiques. Enregistreurs DVR, NVR et XVR. Installation et maintenance en Tunisie.",
};

export default function VideosurveillancePage() {
  return (
    <>
      <PageHeader
        title="Vidéosurveillance."
        subtitle="Des caméras haute résolution aux systèmes d'enregistrement centralisés — protégez vos sites 24h/24 avec une vision claire de chaque angle."
        breadcrumbs={[{ label: "Sûreté", href: "/surete" }, { label: "Vidéosurveillance" }]}
        image="/images/Les caméras Numériques IP.jpg"
        tag="Sûreté — Vidéosurveillance"
      />

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Définition</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                La vidéosurveillance au service de votre sécurité.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Un système de vidéosurveillance complet comprend des caméras adaptées à chaque
                environnement, des enregistreurs pour stocker les images, et des logiciels
                de gestion pour analyser et superviser en temps réel.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-8">
                NTI Solutions conçoit et installe des solutions sur-mesure pour les entreprises,
                hôtels, industries, commerces et institutions à travers toute la Tunisie.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Dissuasion et prévention",
                  "Surveillance en temps réel",
                  "Enregistrement probatoire",
                  "Visualisation à distance",
                ].map((obj) => (
                  <div key={obj} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4820A] flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-[#526272]">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Les caméras Numériques IP.jpg"
                alt="Caméras IP NTI Solutions"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Camera types */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Types de caméras</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Caméras fixes Bullet",
                desc: "Idéales pour surveiller une zone précise à longue distance. Résistantes aux intempéries, utilisées en extérieur.",
                image: "/images/Caméras Fixed bullet.jpg",
              },
              {
                title: "Caméras dômes fixes",
                desc: "Discrètes et anti-vandalisme. Conviennent aux halls d'entrée, couloirs, parkings et zones commerciales.",
                image: "/images/Caméras dômes fixes.jpg",
              },
              {
                title: "Caméras PTZ",
                desc: "Pan-Tilt-Zoom motorisé. Couverture 360° avec zoom optique jusqu'à x32. Idéales pour grands espaces.",
                image: "/images/Caméras PTZ.jpg",
              },
              {
                title: "Caméras thermiques",
                desc: "Détection par chaleur corporelle, indépendante de la lumière. Efficaces la nuit et dans les environnements difficiles.",
                image: "/images/Caméras thermiques.jpg",
              },
              {
                title: "Caméras immobiles",
                desc: "Caméras fixes à vision 360° ou grand angle. Solution économique pour surveillance de salles et bureaux.",
                image: "/images/Caméras immobiles.jpg",
              },
              {
                title: "Caméras numériques CCTV",
                desc: "Compatibles réseaux analogiques existants. Transition progressive vers le numérique sans remplacement complet.",
                image: "/images/Les caméras numériques CCTV.jpg",
              },
            ].map((cam) => (
              <div key={cam.title} className="border border-[#DDE3EC] hover:border-[#D4820A] transition-colors duration-300 group">
                <div className="h-48 overflow-hidden img-zoom-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cam.image}
                    alt={cam.title}
                    className="zoom-target w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-semibold text-[#0C1F3D] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cam.title}
                  </h3>
                  <p className="text-sm text-[#526272] leading-relaxed">{cam.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recorders */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Enregistreurs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Monitor,
                title: "DVR",
                subtitle: "Digital Video Recorder",
                desc: "Enregistreur analogique. Compatible caméras CCTV classiques. Solution économique pour les petites installations.",
                image: "/images/equipement-de-gestion-DVR.jpg",
              },
              {
                icon: Wifi,
                title: "NVR",
                subtitle: "Network Video Recorder",
                desc: "Enregistreur IP pur. Connexion via réseau informatique. Haute définition, gestion à distance, stockage cloud compatible.",
                image: "/images/equipement-de-gestion-NVR.jpg",
              },
              {
                icon: Camera,
                title: "XVR",
                subtitle: "Hybrid Video Recorder",
                desc: "Hybride analogique + IP. Permet la coexistence de caméras CCTV et IP. Idéal pour moderniser un système existant.",
                image: "/images/equipement-de-gestion-XVR.jpg",
              },
            ].map((rec) => (
              <div key={rec.title} className="border border-[#DDE3EC] hover:border-[#D4820A] transition-colors duration-300 group card-lift">
                <div className="h-48 overflow-hidden img-zoom-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rec.image}
                    alt={rec.title}
                    className="zoom-target w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 border border-[#DDE3EC] flex items-center justify-center group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all">
                      <rec.icon size={16} className="text-[#D4820A] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0C1F3D] leading-none" style={{ fontFamily: "var(--font-display)" }}>{rec.title}</p>
                      <p className="text-xs text-[#526272]">{rec.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#526272] leading-relaxed">{rec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="bg-[#0C1F3D] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Besoin d&apos;une étude de votre installation ?
              </p>
              <p className="text-sm text-white/50">
                Audit gratuit, plans d&apos;implantation et devis personnalisé.
              </p>
            </div>
            <Link href="/contact" className="btn-primary flex-shrink-0">
              Demander un devis
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
