import { useEffect, useRef } from "react";

export function useHeaderHandler() {
    const header = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const handler = headerHandler(header.current as HTMLElement);
      if (header.current != null) {
        document.addEventListener("scroll", handler);
      }
      return () => {
        document.removeEventListener("scroll", handler);
      };
    }, [header]);
  
    return header;
  }
  
  function headerHandler(header: HTMLElement) {
    let lastKnownY = window.scrollY;
  
    const HIDDEN_HEADER_CLASS = "hidden-header";
    const FLOATING_HEADER_CLASS = "floating-header";
  
    return () => {
      if (atTheTop()) stopFloating();
      else if (goingDown()) hide();
      else if (goingUp()) float();
    };
  
    function atTheTop() {
      return window.scrollY === 0;
    }
  
    function stopFloating() {
      header.classList.remove(FLOATING_HEADER_CLASS);
    }
  
    function goingDown() {
      return window.scrollY > lastKnownY;
    }
  
    function hide() {
      header.classList.add(HIDDEN_HEADER_CLASS);
      lastKnownY = window.scrollY;
    }
  
    function goingUp() {
      return window.scrollY < lastKnownY;
    }
  
    function float() {
      header.classList.remove(HIDDEN_HEADER_CLASS);
      header.classList.add(FLOATING_HEADER_CLASS);
      lastKnownY = window.scrollY;
    }
  }