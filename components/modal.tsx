"use client";

import { useModalHandler } from "@/lib/hooks";
import { ReactElement } from "react";

export function Modal({ children }: { children: ReactElement }) {
  const { menuButtonRef, modalRef, handleClick } = useModalHandler();

  return (
    <div className="menu on-small-screen">
      <div
        id="menu-button"
        role="button"
        ref={menuButtonRef}
        onClick={() => handleClick()}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <aside>
        <nav
          className="modal"
          ref={modalRef}
          onClick={(e) => modalSpaceHandler(e)}
        >
          <ul
            onClick={(e) => modalListClickHandler(e)}
            className="header__menu-items"
          >
            {children}
          </ul>
        </nav>
      </aside>
    </div>
  );

  function modalSpaceHandler(e: any) {
    if (navWasClicked()) handleClick();

    function navWasClicked() {
      return (e.target as HTMLElement)?.nodeName.toLowerCase() == "nav";
    }
  }

  function modalListClickHandler(e: any) {
    if (anchorWasClicked()) handleClick();

    function anchorWasClicked() {
      return (e.target as HTMLElement).nodeName.toLowerCase() == "a";
    }
  }
}
