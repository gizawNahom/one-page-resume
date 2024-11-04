import { useEffect } from "react";

export function useSectionHandlerOnIntersection() {
  useEffect(() => {
    const aboutSection = document.querySelector("section#about") as Element;
    const experienceSection = document.querySelector(
      "section#experience"
    ) as Element;
    const workSection = document.querySelector("section#work") as Element;
    const contactSection = document.querySelector(".contact") as Element;

    const iO = createIntersectionObserver();

    observeSection(iO, aboutSection);
    observeSection(iO, experienceSection);
    observeSection(iO, workSection);
    observeSection(iO, contactSection);

    function createIntersectionObserver() {
      return new IntersectionObserver(sectionHandler, {
        threshold: 0.3,
      });
    }

    function observeSection(observer: IntersectionObserver, section: Element) {
      observer.observe(section);
    }

    return () => {
      iO.disconnect();
    };
  }, []);

  function sectionHandler(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    if (sectionIntersecting(entries)) {
      const s = section(entries);
      revealSection(s as HTMLElement);
      unobserveSection(observer, s as HTMLElement);
    }

    function sectionIntersecting(entries: IntersectionObserverEntry[]) {
      return entries[0].isIntersecting === true;
    }

    function section(entries: IntersectionObserverEntry[]) {
      return entries[0].target;
    }

    function revealSection(section: HTMLElement) {
      maxOpacity(section);
      translateToTop(section);

      function maxOpacity(section: HTMLElement) {
        section.style.opacity = "1";
      }

      function translateToTop(section: HTMLElement) {
        section.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
      }
    }

    function unobserveSection(
      observer: IntersectionObserver,
      section: HTMLElement
    ) {
      observer.unobserve(section);
    }
  }
}
