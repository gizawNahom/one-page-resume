"use client";
import React, { ReactNode, useEffect, useState } from "react";

export function SplashScreen({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const splashKey = "splashSeen";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const alreadySeen = sessionStorage.getItem(splashKey);
      if (alreadySeen) {
        setIsLoading(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(splashKey, "true");
      }
      setIsLoading(false);
    }, 1005);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        renderSplashContent()
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );

  function renderSplashContent() {
    return (
      <div className="splash-screen" data-testid="splashScreen">
        <h1 className="splash-screen__text">N</h1>
      </div>
    );
  }
}
