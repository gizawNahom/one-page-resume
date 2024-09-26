import { useRef } from "react";
import { useModal } from "../contexts/modalContext";

export function useModalHandler1() {
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const {
    openModal: blurMain,
    closeModal: revealMain,
    isModalOpen,
  } = useModal();

  return { menuButtonRef, modalRef, handleClick };

  function handleClick() {
    handleBlur();
    handleMenuButton(menuButtonRef.current as HTMLElement);
    handleModal(modalRef.current as HTMLElement);

    function handleBlur() {
      if (!isModalOpen) blurMain();
      else revealMain();
    }

    function handleMenuButton(menuButton: HTMLElement) {
      const line1 = menuButton.querySelector(".line:nth-of-type(1)");
      const line2 = menuButton.querySelector(".line:nth-of-type(2)");
      const line3 = menuButton.querySelector(".line:nth-of-type(3)");
      const LINE1_NAME = "line1";
      const LINE2_NAME = "line2";
      const LINE3_NAME = "line3";
      const FORWARD = "-forward";
      const BACKWARD = "-backward";

      if (!isModalOpen) forwardAnimateButton();
      else reverseAnimateButton();

      function forwardAnimateButton() {
        forwardAnimateLine(line1, LINE1_NAME);
        forwardAnimateLine(line2, LINE2_NAME);
        forwardAnimateLine(line3, LINE3_NAME);

        function forwardAnimateLine(line: any, lineName: string) {
          line.classList.remove(`${lineName}${BACKWARD}`);
          line.classList.add(`${lineName}${FORWARD}`);
        }
      }

      function reverseAnimateButton() {
        reverseAnimateLine(line1, LINE1_NAME);
        reverseAnimateLine(line2, LINE2_NAME);
        reverseAnimateLine(line3, LINE3_NAME);

        function reverseAnimateLine(line: any, lineName: string) {
          line.classList.remove(`${lineName}${FORWARD}`);
          line.classList.add(`${lineName}${BACKWARD}`);
        }
      }
    }

    function handleModal(modal: HTMLElement) {
      const STOP_SCROLLING_CLASS = "stop-scrolling";
      const REVEALED_MODAL_CLASS = "reveled-modal";
      const HIDDEN_MODAL_CLASS = "hidden-modal";

      if (!isModalOpen) openModal(modal);
      else closeModal(modal);

      function openModal(modal: HTMLElement) {
        stopBodyScrolling();
        revealModal();

        function stopBodyScrolling() {
          document.body.classList.add(STOP_SCROLLING_CLASS);
        }

        function revealModal() {
          modal.classList.remove(HIDDEN_MODAL_CLASS);
          modal.classList.add(REVEALED_MODAL_CLASS);
        }
      }

      function closeModal(modal: HTMLElement) {
        startBodyScrolling();
        hideModal();

        function startBodyScrolling() {
          document.body.classList.remove(STOP_SCROLLING_CLASS);
        }

        function hideModal() {
          modal.classList.remove(REVEALED_MODAL_CLASS);
          modal.classList.add(HIDDEN_MODAL_CLASS);
        }
      }
    }
  }
}
