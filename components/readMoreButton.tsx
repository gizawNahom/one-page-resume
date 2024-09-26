"use client";

import { ReactNode } from "react";

export function ReadMoreButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <button onClick={readMore} className={className}>
      {children}
    </button>
  );

  function readMore() {
    const button = document.querySelector("#about .content button") as HTMLElement;
    const text = document.querySelector("#about .content .more") as HTMLElement;
    button.style.display = "none";
    text.style.display = "block";
  }
}
