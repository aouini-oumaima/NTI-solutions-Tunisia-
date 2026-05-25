"use client";

import { useState, useEffect } from "react";
import { FileDown, Loader2 } from "lucide-react";
import type { ArticlePDFData } from "@/components/pdf/NTIArticlePDF";

interface PDFDownloadButtonProps {
  data: ArticlePDFData;
  fileName?: string;
  className?: string;
  variant?: "light" | "dark" | "red";
}

export function PDFDownloadButton({
  data,
  fileName,
  className = "",
  variant = "light",
}: PDFDownloadButtonProps) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Dynamic import to avoid SSR issues
      const [{ pdf }, { NTIArticlePDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/pdf/NTIArticlePDF"),
      ]);

      const blob = await pdf(<NTIArticlePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName ?? `NTI-Solutions_${data.title.replace(/\s+/g, "-")}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("PDF generation error:", e);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isClient) return null;

  const base =
    "inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase cursor-pointer border transition-all duration-300 px-4 py-2.5 select-none";

  const variants = {
    light:
      "border-[#DDE3EC] text-[#526272] hover:border-[#D4820A] hover:text-[#D4820A] bg-white",
    dark: "border-white/20 text-white/60 hover:border-[#D4820A] hover:text-white bg-transparent",
    red: "border-[#D4820A] text-[#D4820A] hover:bg-[#D4820A] hover:text-white bg-transparent",
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`${base} ${variants[variant]} ${className} disabled:opacity-50`}
      title={`Télécharger la fiche PDF — ${data.title}`}
    >
      {isGenerating ? (
        <Loader2 size={13} className="animate-spin" />
      ) : (
        <FileDown size={13} />
      )}
      {isGenerating ? "Génération..." : "Fiche PDF"}
    </button>
  );
}
