import { useContext, useState } from "react";
import Button from "./UI/Button";
import { CartContext } from "../store/cartContext";
import Modal from "./UI/Modal";
import CartItems from "./CartItems";
import { formatter } from "./utils/validation";
import CheckOut from "./CheckOut";

export default function Cart() {
  const { items } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [openCheckOutModal, setOpenCheckOutModal] = useState(false);

  const totalCartValue = items?.reduce((totalPrice, item) => {
    return (totalPrice = totalPrice + item.qty * item.price);
  }, 0);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseDialog() {
    setOpenModal(false);
  }

  function handleCheckOut() {
    setOpenModal(false);
    setOpenCheckOutModal(true)
  }

  function handleCheckOutCloseDialog() {
    setOpenCheckOutModal(false);
  }

  return (
    <>
      <Button onClick={handleOpenModal}>
        Cart ({items?.length})
      </Button>

      {openModal && (
        <Modal
          openModal={openModal}
          handleCloseDialog={handleCloseDialog}
          className="cart"
        >
          <>
            <h2>Your Cart</h2>
            <CartItems></CartItems>
            <p className="cart-total">{formatter.format(totalCartValue)}</p>
            <p className="modal-actions">
              <Button onClick={handleCloseDialog} isTextOnly>
                Close
              </Button>
              {items?.length > 0 && (
                <Button onClick={handleCheckOut}>Go to Check Out</Button>
              )}
            </p>
          </>
        </Modal>
      )}


      {openCheckOutModal && (
        <Modal
          openModal={openCheckOutModal}
          handleCloseDialog={handleCheckOutCloseDialog}
          className="cart"
        >
          <>
            <CheckOut onClose={handleCheckOutCloseDialog}></CheckOut>
          </>
        </Modal>
      )}


    </>
  );
}
