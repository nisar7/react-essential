import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import Modal from "../modal/Modal";
import CartItems from "./CartItems";

export default function Cart() {
  const { items } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  function handleModalClose() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal((prevVal) => !prevVal);
  }
  return (
    <>
      <p style={{ cursor: "pointer" }} onClick={handleOpenModal}>
        Cart {items.length ? items.length : "Please Select Items"}
      </p>

      {openModal && (
        <Modal open={openModal} onClose={handleModalClose}>
          <CartItems></CartItems>
        </Modal>
      )}
    </>
  );
}
