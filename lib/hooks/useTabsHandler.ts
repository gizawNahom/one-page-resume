import { useEffect } from "react";

export function useTabsHandler() {
    useEffect(() => {
      const tabs = Array.from(
        document.querySelectorAll("#experience [role=tab]")
      ) as HTMLElement[];
      const tabPanels = Array.from(
        document.querySelectorAll("#experience [role=tabpanel]")
      ) as HTMLElement[];
      if (tabs.length === 0 || tabPanels.length === 0) return;
      const poleSelector = createPoleSelector();
      const handler = tabsHandler({ tabs, tabPanels, poleSelector });
      tabs.forEach((t) => t.addEventListener("click", handler));
  
      return () => {
        tabs.forEach((t) => t.removeEventListener("click", handler));
      };
    }, []);
  
    function createPoleSelector(): { className: string; element: HTMLElement } {
      const className = "tab-pole-selector";
      const element = document.querySelector(
        `section#experience .${className}`
      ) as HTMLElement;
      return {
        className,
        element,
      };
    }
  
    function tabsHandler({
      tabs,
      tabPanels,
      poleSelector,
    }: {
      tabs: HTMLElement[];
      tabPanels: HTMLElement[];
      poleSelector: { className: string; element: HTMLElement };
    }) {
      return (event: Event) => {
        deselectAllTabs();
        hideAllTabPanels();
        selectClickedTab(event);
        movePoleSelector(event);
        revealAppropriateTabPanel(event);
      };
  
      function deselectAllTabs() {
        tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      }
  
      function hideAllTabPanels() {
        tabPanels.forEach((p) => {
          p.setAttribute("aria-hidden", "true");
          p.hidden = true;
        });
      }
  
      function selectClickedTab(event: Event) {
        clickedTab(event)?.setAttribute("aria-selected", "true");
      }
  
      function movePoleSelector(event: Event) {
        const order = orderOfClickedTab();
        moveSelectorToOrder(order);
  
        function orderOfClickedTab() {
          return tabs.indexOf(clickedTab(event));
        }
  
        function moveSelectorToOrder(order: number) {
          const tabClasses = [
            "first-tab",
            "second-tab",
            "third-tab",
            "fourth-tab",
            "fifth-tab",
          ];
          const className = tabClasses[order];
          if (!className) return;
          moveTo(className);
  
          function moveTo(tabName: string) {
            if (!poleSelector.element) return;
            poleSelector.element.setAttribute(
              "class",
              `${poleSelector.className} ${tabName}`
            );
          }
        }
      }
  
      function revealAppropriateTabPanel(event: Event) {
        const id = clickedTabId();
        const panel = findAppropriateTabPanel(id);
        revealTabPanel(panel as HTMLElement);
  
        function clickedTabId() {
          return clickedTab(event)?.id;
        }
  
        function findAppropriateTabPanel(id: string) {
          return tabPanels.find((t) => t.getAttribute("aria-labelledby") === id);
        }
  
        function revealTabPanel(panel: HTMLElement) {
          panel.setAttribute("aria-hidden", "false");
          panel.hidden = false;
        }
      }
  
      function clickedTab(event: Event): HTMLElement {
        return event.currentTarget as HTMLElement;
      }
    }
  }
  
