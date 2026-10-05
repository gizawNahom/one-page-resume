"use client";

import { useEffect } from "react";

// Moves the background glow (body::before) to follow the pointer.
export function Spotlight() {
  useEffect(() => {
    const updateSpotlight = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateSpotlight, { passive: true });
    return () => window.removeEventListener("pointermove", updateSpotlight);
  }, []);

  return null;
}
