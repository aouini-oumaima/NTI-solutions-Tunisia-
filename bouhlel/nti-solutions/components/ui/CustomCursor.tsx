"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX  = -100, ringY  = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // dot follows instantly — GPU transform only, no layout
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const onMouseEnterLink = () => ring.classList.add("hovering");
    const onMouseLeaveLink = () => ring.classList.remove("hovering");

    function animate() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      // ring follows with lerp — GPU transform only, no layout
      if (ring) ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    // Event delegation — one listener, no MutationObserver
    document.addEventListener("mouseover", (e) => {
      if ((e.target as Element)?.closest("a, button, [role='button'], input, textarea, select, label")) {
        ring.classList.add("hovering");
      }
    });
    document.addEventListener("mouseout", (e) => {
      if ((e.target as Element)?.closest("a, button, [role='button'], input, textarea, select, label")) {
        ring.classList.remove("hovering");
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  hidden md:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}
