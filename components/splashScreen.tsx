"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Script from "next/script";

export function SplashScreen({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
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
          <Script src="./script.js" />
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
