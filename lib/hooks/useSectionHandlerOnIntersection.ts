import { useEffect } from "react";

export function useSectionHandlerOnIntersection() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll(".animated-in-section")
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(sectionHandler, {
      threshold: 0.3,
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function sectionHandler(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const section = entry.target as HTMLElement;
      revealSection(section);
      observer.unobserve(section);
    });

    function revealSection(section: HTMLElement) {
      section.style.opacity = "1";
      section.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
    }
  }
}
