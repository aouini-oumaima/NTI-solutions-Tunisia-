import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, BarChart3, Car, RotateCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Contrôle d'accès",
  description:
    "Systèmes de contrôle d'accès par NTI Solutions : tourniquets, lecteurs biométriques, contrôle de ronde, barrières véhicules. Installation et maintenance en Tunisie.",
};

export default function ControleAccesPage() {
  return (
    <>
      <PageHeader
        title="Contrôle d'accès."
        subtitle="Sécurisez et maîtrisez les accès physiques à vos bâtiments et sites. Qui entre, quand, et par où — tout est tracé et contrôlé."
        breadcrumbs={[{ label: "Sûreté", href: "/surete" }, { label: "Contrôle d'accès" }]}
        image="/images/controle-dacces-1.jpg"
        tag="Sûreté — Contrôle d'accès"
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
                Le contrôle d&apos;accès : protéger, tracer, gérer.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Le contrôle d&apos;accès regroupe l&apos;ensemble des solutions techniques
                qui permettent de sécuriser et gérer les accès physiques à un bâtiment,
                un étage ou une zone sensible.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Protéger bâtiments et marchandises",
                  "Prévenir les intrusions non habilitées",
                  "Éviter les actes de malveillance",
                  "Sécuriser le personnel",
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
              <img src="/images/controle-dacces-1.jpg" alt="Contrôle d'accès NTI Solutions" className="w-full h-[400px] object-cover"  loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* Sub-solutions grid */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Nos sous-systèmes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: RotateCw,
                title: "Tourniquets",
                desc: "Barreaudés, tripodes et couloirs sécurisés pour contrôler les flux piétons dans les entreprises, stades, musées et sites touristiques.",
                href: "/surete/controle-acces/tourniquets",
                image: "/images/systeme-de-tourniquet-tripod.jpg",
              },
              {
                icon: BarChart3,
                title: "Contrôle de ronde",
                desc: "Automatisation des patrouilles de sécurité avec rapports instantanés. Idéal pour usines, entrepôts, unités militaires et chantiers.",
                href: "/surete/controle-acces",
                image: "/images/systeme-de-comtrole-de-ronde-1.jpg",
              },
              {
                icon: Car,
                title: "Contrôle véhicules",
                desc: "Barrières de bras, bloqueurs de routes et champignons pour zones résidentielles et parkings. Compatibles RFID, télécommandes et badges.",
                href: "/surete/controle-acces",
                image: "/images/VOITURES.jpg",
              },
            ].map((sol) => (
              <Link key={sol.title} href={sol.href} className="group border border-[#DDE3EC] hover:border-[#D4820A] transition-colors duration-300 card-lift">
                <div className="h-52 overflow-hidden img-zoom-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sol.image} alt={sol.title} className="zoom-target w-full h-full object-cover"  loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 border border-[#DDE3EC] flex items-center justify-center group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all">
                      <sol.icon size={16} className="text-[#D4820A] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>{sol.title}</h3>
                  </div>
                  <p className="text-sm text-[#526272] leading-relaxed mb-4">{sol.desc}</p>
                  <span className="flex items-center gap-2 text-sm text-[#D4820A] font-medium">En savoir plus <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>

          {/* Ronde system detail */}
          <div className="mt-20 bg-[#F2F5F8] p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Contrôle de ronde</span>
              </div>
              <h3 className="heading-sm text-[#0C1F3D] mb-4">
                Automatisez vos patrouilles de sécurité.
              </h3>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Le système de contrôle de ronde automatise et tracifie les tournées
                des agents de sécurité dans des lieux à contrôler périodiquement :
                usines, entrepôts, chantiers, campus universitaires, unités militaires.
              </p>
              <p className="text-base text-[#526272] leading-relaxed">
                Il définit précisément les moments de contrôle des points de sécurité
                et génère des rapports automatiques — preuve horodatée de chaque passage.
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/systeme-de-comtrole-de-ronde-1.jpg" alt="Système de contrôle de ronde" className="w-full h-[280px] object-cover"  loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
