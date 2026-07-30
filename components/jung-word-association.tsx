"use client";

import { useRef, useState } from "react";

const letters = Array.from("Carl Jung");

export function JungWordAssociation() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handlePointerEnter = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setIsActive(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (!isActive || !nameRef.current) return;

    const rect = nameRef.current.getBoundingClientRect();
    nameRef.current.style.setProperty("--response-cursor-x", `${event.clientX - rect.left}px`);
    nameRef.current.style.setProperty("--response-cursor-y", `${event.clientY - rect.top}px`);
  };

  return (
    <span
      ref={nameRef}
      className={isActive ? "jung-name is-active" : "jung-name"}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setIsActive(false)}
    >
      <span className="jung-response-marker" aria-hidden="true">
        <span className="jung-mandala">
          <span className="jung-response-cell" />
          <span className="jung-response-cell" />
          <span className="jung-response-cell" />
          <span className="jung-response-cell" />
        </span>
      </span>
      <span className="jung-name-text">
        {letters.map((letter, index) => (
          <span key={`${letter}-${index}`} className="jung-letter" style={{ "--letter-index": index } as React.CSSProperties}>
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
    </span>
  );
}
