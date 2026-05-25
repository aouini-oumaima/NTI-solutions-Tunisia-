import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Img } from "@/components/ui/Img";

export function CTASection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-[#0C1F3D] overflow-hidden">
      {/* Static background image */}
      <Img
        src="/images/lutte.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0C1F3D]/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,130,10,0.14)_0%,transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#D4820A]/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#D4820A]/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#D4820A]/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#D4820A]/30" />

      <div className="relative z-10 container-narrow text-center py-24">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#D4820A]" />
          <span className="label-tag text-white/40">Passons à l&apos;action</span>
          <span className="w-8 h-px bg-[#D4820A]" />
        </div>

        <h2 className="heading-xl text-white mb-6">
          Un projet de sécurité ?{" "}
          <span className="gradient-text">Parlons-en.</span>
        </h2>

        <p className="text-base md:text-lg text-white/50 leading-relaxed mb-12 max-w-xl mx-auto">
          Notre équipe d&apos;ingénieurs répond à votre demande sous 24h.
          Étude de faisabilité, devis détaillé et conseil personnalisé — sans engagement.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
          <Link href="/contact" className="btn-primary group text-base px-8 py-4">
            Demander un devis gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/21629600424"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group text-base px-8 py-4 hover:border-[#25D366] hover:text-[#25D366]"
          >
            <Phone size={18} />
            WhatsApp · +216 29 600 424
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["Réponse sous 24h", "Étude gratuite", "Sans engagement", "Certifiés NF EN 54"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-white/35">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4820A]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
