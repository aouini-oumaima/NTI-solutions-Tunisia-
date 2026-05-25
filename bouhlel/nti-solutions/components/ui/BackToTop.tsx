"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-6 md:bottom-10 md:left-10 z-40 w-10 h-10 border border-[#DDE3EC] bg-white hover:bg-[#0C1F3D] hover:border-[#0C1F3D] flex items-center justify-center transition-all duration-300 group shadow-md"
          aria-label="Retour en haut"
        >
          <ArrowUp size={16} className="text-[#0C1F3D] group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
