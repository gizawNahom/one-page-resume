registerHeaderHandlerOnScroll()
registerModalHandlerOnClick()
registerTabsHandlerOnClick()
registerSectionHandlerOnIntersection()

function readMore() {
	const button = document.querySelector('#about .content button');
	const text = document.querySelector('#about .content .more');
	button.style.display = "none"
	text.style.display = "block"
}

function registerHeaderHandlerOnScroll() {
	const header = document.querySelector("header")
	const handler = headerHandler(header)
	document.addEventListener("scroll", handler)
}

function headerHandler(header) {
	let lastKnownY = window.scrollY

	const HIDDEN_HEADER_CLASS = "hidden-header"
	const FLOATING_HEADER_CLASS = "floating-header"

	return () => {
		if (atTheTop()) stopFloating()
		else if (goingDown()) hide()
		else if (goingUp()) float()
	}

	function atTheTop() {
		return window.scrollY === 0
	}

	function stopFloating() {
		header.classList.remove(FLOATING_HEADER_CLASS)
	}

	function goingDown() {
		return window.scrollY > lastKnownY
	}

	function hide() {
		header.classList.add(HIDDEN_HEADER_CLASS)
		lastKnownY = window.scrollY
	}

	function goingUp() {
		return window.scrollY < lastKnownY
	}

	function float() {
		header.classList.remove(HIDDEN_HEADER_CLASS)
		header.classList.add(FLOATING_HEADER_CLASS)
		lastKnownY = window.scrollY
	}
}

function registerModalHandlerOnClick() {
	const menuButton = document.querySelector("#menu-button")
	const modal = document.querySelector(".modal")
	const modalList = modal.querySelector("ul")
	const main = document.querySelector("main")

	const handler = modalHandler(menuButton, modal, main)

	registerHandlerOnMenuButton()
	registerHandlerOnModal()
	registerHandlerOnModalList()

	function registerHandlerOnMenuButton() {
		menuButton.addEventListener("click", handler)
	}

	function registerHandlerOnModal() {
		modal.addEventListener("click", (e) => {
			if (navWasClicked()) handler()

			function navWasClicked() {
				return e.target.nodeName.toLowerCase() == "nav"
			}
		})
	}

	function registerHandlerOnModalList() {
		modalList.addEventListener("click", (e) => {
			if (anchorWasClicked()) handler()

			function anchorWasClicked() {
				return e.target.nodeName.toLowerCase() == "a"
			}
		})
	}
}

function modalHandler(menuButton, modal, main) {
	let opened

	const line1 = menuButton.querySelector(".line:nth-of-type(1)")
	const line2 = menuButton.querySelector(".line:nth-of-type(2)")
	const line3 = menuButton.querySelector(".line:nth-of-type(3)")

	const STOP_SCROLLING_CLASS = "stop-scrolling"
	const REVEALED_MODAL_CLASS = "reveled-modal"
	const HIDDEN_MODAL_CLASS = "hidden-modal"
	const BLURRED_CLASS = "blurred"
	const UNBLURRED_CLASS = "unset-filter"
	const LINE1_NAME = "line1"
	const LINE2_NAME = "line2"
	const LINE3_NAME = "line3"
	const FORWARD = "-forward"
	const BACKWARD = "-backward"

	return () => {
		if (!opened) openModal()
		else if (opened) closeModal()
	}

	function openModal() {
		opened = true
		stopBodyScrolling()
		revealModal()
		blurMain()
		forwardAnimateButton()

		function stopBodyScrolling() {
			document.body.classList.add(STOP_SCROLLING_CLASS)
		}

		function revealModal() {
			modal.classList.remove(HIDDEN_MODAL_CLASS)
			modal.classList.add(REVEALED_MODAL_CLASS)
		}

		function blurMain() {
			main.classList.remove(UNBLURRED_CLASS)
			main.classList.add(BLURRED_CLASS)
		}

		function forwardAnimateButton() {
			forwardAnimateLine(line1, LINE1_NAME)
			forwardAnimateLine(line2, LINE2_NAME)
			forwardAnimateLine(line3, LINE3_NAME)

			function forwardAnimateLine(line, lineName) {
				line.classList.remove(`${lineName}${BACKWARD}`)
				line.classList.add(`${lineName}${FORWARD}`)
			}
		}
	}

	function closeModal() {
		opened = false
		startBodyScrolling()
		hideModal()
		unblurMain()
		reverseAnimateButton()

		function startBodyScrolling() {
			document.body.classList.remove(STOP_SCROLLING_CLASS)
		}

		function hideModal() {
			modal.classList.remove(REVEALED_MODAL_CLASS)
			modal.classList.add(HIDDEN_MODAL_CLASS)
		}

		function unblurMain() {
			main.classList.remove(BLURRED_CLASS)
			main.classList.add(UNBLURRED_CLASS)
		}

		function reverseAnimateButton() {
			reverseAnimateLine(line1, LINE1_NAME)
			reverseAnimateLine(line2, LINE2_NAME)
			reverseAnimateLine(line3, LINE3_NAME)

			function reverseAnimateLine(line, lineName) {
				line.classList.remove(`${lineName}${FORWARD}`)
				line.classList.add(`${lineName}${BACKWARD}`)
			}
		}
	}
}

function registerTabsHandlerOnClick() {
	const tabs = Array.from(document.querySelectorAll("#experience [role=tab]"))
	const tabPanels = Array.from(
		document.querySelectorAll("#experience [role=tabpanel]")
	)
	const poleSelector = createPoleSelector()

	const handler = tabsHandler({ tabs, tabPanels, poleSelector })

	tabs.forEach((t) => t.addEventListener("click", handler))

	function createPoleSelector() {
		const className = "tab-pole-selector"
		const element = document.querySelector(
			`section#experience .${className}`
		)
		return {
			className,
			element
		}
	}
}

function tabsHandler({ tabs, tabPanels, poleSelector }) {
	return (event) => {
		deselectAllTabs()
		hideAllTabPanels()
		selectClickedTab(event)
		movePoleSelector()
		revealAppropriateTabPanel(event)
	}

	function deselectAllTabs() {
		tabs.forEach((t) => t.setAttribute("aria-selected", false))
	}

	function hideAllTabPanels() {
		tabPanels.forEach((p) => {
			p.setAttribute("aria-hidden", "true")
			p.hidden = true
		})
	}

	function selectClickedTab(event) {
		clickedTab(event).setAttribute("aria-selected", true)
	}

	function movePoleSelector() {
		const order = orderOfClickedTab()
		moveSelectorToOrder(order)

		function orderOfClickedTab() {
			return tabs.indexOf(clickedTab(event))
		}

		function moveSelectorToOrder(order) {
			if(order === 0) moveTo("first-tab")
			else if(order == 1) moveTo("second-tab")
			else if(order == 2) moveTo("third-tab")
			else if(order == 3) moveTo("fourth-tab")
			else if(order == 4) moveTo("fifth-tab")

			function moveTo(tabName) {
				poleSelector.element.setAttribute(
					"class",
					`${poleSelector.className} ${tabName}`
				)
			}
		}
	}

	function revealAppropriateTabPanel(event) {
		const id = clickedTabId()
		const panel = findAppropriateTabPanel(id)
		revealTabPanel(panel)

		function clickedTabId() {
			return clickedTab(event).id
		}

		function findAppropriateTabPanel(id) {
			return tabPanels.find((t) => t.getAttribute("aria-labelledby") === id)
		}

		function revealTabPanel(panel) {
			panel.setAttribute("aria-hidden", "false")
			panel.hidden = false
		}
	}

	function clickedTab(event) {
		return event.currentTarget
	}
}

function registerSectionHandlerOnIntersection() {
	const aboutSection = document.querySelector("section#about")
	const experienceSection = document.querySelector("section#experience")
	const contactSection = document.querySelector(".contact")
	
	const iO = createIntersectionObserver()

	observeSection(iO, aboutSection)
	observeSection(iO, experienceSection)
	observeSection(iO, contactSection)

	function createIntersectionObserver() {
		return new IntersectionObserver(sectionHandler, {
			threshold: 0.3,
		})
	}

	function observeSection(observer, section) {
		observer.observe(section)
	}
}

function sectionHandler(payload) {
	if (sectionIntersecting(payload)) {
		const s = section(payload)
		revealSection(s)
		unobserveSection(this, s)
	}

	function sectionIntersecting(payload) {
		return payload[0].isIntersecting === true
	}

	function section(payload) {
		return payload[0].target
	}

	function revealSection(section) {
		maxOpacity(section)
		translateToTop(section)

		function maxOpacity(section) {
			section.style.opacity = 1
		}

		function translateToTop(section) {
			section.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)"
		}
	}

	function unobserveSection(observer, section) {
		observer.unobserve(section)
	}
}
