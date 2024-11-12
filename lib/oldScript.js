registerTabsHandlerOnClick();
registerSectionHandlerOnIntersection();

function registerTabsHandlerOnClick() {
  const tabs = Array.from(document.querySelectorAll("#experience [role=tab]"));
  const tabPanels = Array.from(
    document.querySelectorAll("#experience [role=tabpanel]")
  );
  const poleSelector = createPoleSelector();

  const handler = tabsHandler({ tabs, tabPanels, poleSelector });

  tabs.forEach((t) => t.addEventListener("click", handler));

  function createPoleSelector() {
    const className = "tab-pole-selector";
    const element = document.querySelector(`section#experience .${className}`);
    return {
      className,
      element,
    };
  }
}

function tabsHandler({ tabs, tabPanels, poleSelector }) {
  return (event) => {
    deselectAllTabs();
    hideAllTabPanels();
    selectClickedTab(event);
    movePoleSelector();
    revealAppropriateTabPanel(event);
  };

  function deselectAllTabs() {
    tabs.forEach((t) => t.setAttribute("aria-selected", false));
  }

  function hideAllTabPanels() {
    tabPanels.forEach((p) => {
      p.setAttribute("aria-hidden", "true");
      p.hidden = true;
    });
  }

  function selectClickedTab(event) {
    clickedTab(event).setAttribute("aria-selected", true);
  }

  function movePoleSelector() {
    const order = orderOfClickedTab();
    moveSelectorToOrder(order);

    function orderOfClickedTab() {
      return tabs.indexOf(clickedTab(event));
    }

    function moveSelectorToOrder(order) {
      if (order === 0) moveTo("first-tab");
      else if (order == 1) moveTo("second-tab");
      else if (order == 2) moveTo("third-tab");
      else if (order == 3) moveTo("fourth-tab");
      else if (order == 4) moveTo("fifth-tab");

      function moveTo(tabName) {
        poleSelector.element.setAttribute(
          "class",
          `${poleSelector.className} ${tabName}`
        );
      }
    }
  }

  function revealAppropriateTabPanel(event) {
    const id = clickedTabId();
    const panel = findAppropriateTabPanel(id);
    revealTabPanel(panel);

    function clickedTabId() {
      return clickedTab(event).id;
    }

    function findAppropriateTabPanel(id) {
      return tabPanels.find((t) => t.getAttribute("aria-labelledby") === id);
    }

    function revealTabPanel(panel) {
      panel.setAttribute("aria-hidden", "false");
      panel.hidden = false;
    }
  }

  function clickedTab(event) {
    return event.currentTarget;
  }
}

function registerSectionHandlerOnIntersection() {
  const aboutSection = document.querySelector("section#about");
  const experienceSection = document.querySelector("section#experience");
  const workSection = document.querySelector("section#work");
  const contactSection = document.querySelector(".contact");

  const iO = createIntersectionObserver();

  observeSection(iO, aboutSection);
  observeSection(iO, experienceSection);
  observeSection(iO, workSection);
  observeSection(iO, contactSection);

  function createIntersectionObserver() {
    return new IntersectionObserver(sectionHandler, {
      threshold: 0.1,
    });
  }

  function observeSection(observer, section) {
    observer.observe(section);
  }
}

function sectionHandler(payload) {
  if (sectionIntersecting(payload)) {
    const s = section(payload);
    revealSection(s);
    unobserveSection(this, s);
  }

  function sectionIntersecting(payload) {
    return payload[0].isIntersecting === true;
  }

  function section(payload) {
    return payload[0].target;
  }

  function revealSection(section) {
    maxOpacity(section);
    translateToTop(section);

    function maxOpacity(section) {
      section.style.opacity = 1;
    }

    function translateToTop(section) {
      section.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
    }
  }

  function unobserveSection(observer, section) {
    observer.unobserve(section);
  }
}
