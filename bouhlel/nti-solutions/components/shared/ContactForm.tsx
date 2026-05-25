"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  { value: "devis", label: "Demande de devis" },
  { value: "information", label: "Demande d'information" },
  { value: "maintenance", label: "Maintenance / SAV" },
  { value: "partenariat", label: "Partenariat" },
  { value: "autre", label: "Autre" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    societe: "",
    sujet: "devis",
    message: "",
    rgpd: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Formspree handles form submission without a server.
    // Create a free form at https://formspree.io and replace the ID below.
    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xdajllrl";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          societe: form.societe,
          sujet: form.sujet,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Formspree error");
      setStatus("success");
      setForm({ nom: "", email: "", telephone: "", societe: "", sujet: "devis", message: "", rgpd: false });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-[#DDE3EC] p-10 text-center">
        <CheckCircle size={40} className="text-[#D4820A] mx-auto mb-4" />
        <h3 className="font-semibold text-lg text-[#0C1F3D] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Message envoyé avec succès !
        </h3>
        <p className="text-sm text-[#526272]">
          Notre équipe vous répondra sous 24 heures ouvrées.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#D4820A] hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block text-xs font-medium text-[#0C1F3D] mb-2">
            Nom complet <span className="text-[#D4820A]">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#0C1F3D] mb-2">
            Email <span className="text-[#D4820A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telephone" className="block text-xs font-medium text-[#0C1F3D] mb-2">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors"
            placeholder="+216 XX XXX XXX"
          />
        </div>
        <div>
          <label htmlFor="societe" className="block text-xs font-medium text-[#0C1F3D] mb-2">
            Société / Organisation
          </label>
          <input
            id="societe"
            name="societe"
            type="text"
            value={form.societe}
            onChange={handleChange}
            className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors"
            placeholder="Votre entreprise"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="block text-xs font-medium text-[#0C1F3D] mb-2">
          Sujet <span className="text-[#D4820A]">*</span>
        </label>
        <select
          id="sujet"
          name="sujet"
          required
          value={form.sujet}
          onChange={handleChange}
          className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors bg-white appearance-none"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#0C1F3D] mb-2">
          Message <span className="text-[#D4820A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-[#DDE3EC] px-4 py-3 text-sm text-[#0C1F3D] focus:outline-none focus:border-[#D4820A] transition-colors resize-none"
          placeholder="Décrivez votre projet, vos besoins, la superficie approximative du site..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          required
          checked={form.rgpd}
          onChange={handleChange}
          className="mt-0.5 flex-shrink-0 accent-[#D4820A]"
        />
        <label htmlFor="rgpd" className="text-xs text-[#526272] leading-relaxed">
          J&apos;accepte que mes données personnelles soient utilisées par NTI Solutions
          pour répondre à ma demande, conformément à la politique de confidentialité.{" "}
          <span className="text-[#D4820A]">*</span>
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 border border-red-200 bg-red-50 px-4 py-3">
          <AlertCircle size={16} />
          Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={16} />
            Envoyer le message
          </span>
        )}
      </button>
    </form>
  );
}
