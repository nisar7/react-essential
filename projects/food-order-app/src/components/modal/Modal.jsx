import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return (
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>
  );
}
