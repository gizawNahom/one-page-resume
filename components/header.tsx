"use client";

import { useHeaderHandler } from "@/lib/hooks";
import { ReactElement } from "react";

export function Header({ children }: { children: ReactElement }) {
  const header = useHeaderHandler();

  return (
    <header ref={header} className="header">
      {children}
    </header>
  );
}
