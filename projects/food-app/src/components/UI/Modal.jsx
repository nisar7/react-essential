import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

export default function Modal({ children, openModal, handleCloseDialog , className = "" }) {
  const openDialog = useRef(false);

  useEffect(() => {
    if (openModal) {
      openDialog.current.showModal();
    } else {
      openDialog.current.close();
    }
  }, [openModal]);

  return createPortal(
    <>
      <dialog ref={openDialog} onClose={handleCloseDialog} className={`modal ${className}`}>
        {children}
      </dialog>
    </>, document.getElementById("modal")
  );
}
