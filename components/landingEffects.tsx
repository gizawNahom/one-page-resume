"use client";

import { useSectionHandlerOnIntersection, useTabsHandler } from "@/lib/hooks";

export function LandingEffects() {
  useSectionHandlerOnIntersection();
  useTabsHandler();
  return null;
}
