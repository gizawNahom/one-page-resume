registerHeaderHandlerOnScroll()
registerModalHandlerOnClick()

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
			if (navWasClicked())
				handler()

			function navWasClicked() {
				return e.target.nodeName.toLowerCase() == "nav"
			}
		})
	}

	function registerHandlerOnModalList() {
		modalList.addEventListener("click", (e) => {
			if (anchorWasClicked())
				handler()

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
