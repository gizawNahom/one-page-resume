"use client";

import { useModal } from "@/lib/contexts/modalContext";
import { ReactElement, useEffect, useRef } from "react";

export function Main({ children }: { children: ReactElement }) {
  const BLURRED_CLASS = "blurred";
  const UNBLURRED_CLASS = "unset-filter";
  const { isModalOpen } = useModal();
  const main = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      main.current?.classList.remove(UNBLURRED_CLASS);
      main.current?.classList.add(BLURRED_CLASS);
    } else {
      main.current?.classList.remove(BLURRED_CLASS);
      main.current?.classList.add(UNBLURRED_CLASS);
    }
  }, [isModalOpen]);

  return <main ref={main}>{children}</main>;
}
