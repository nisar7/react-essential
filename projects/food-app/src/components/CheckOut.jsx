import { useContext, useLayoutEffect, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { CartContext } from "../store/cartContext";
import { formatter, hasLength, validEmail } from "./utils/validation";
import useHttp from "../hooks/useHttp";

export default function CheckOut({ onClose }) {
  const { sendRequest } = useHttp("http://localhost:3000/orders");
  const { items } = useContext(CartContext);

  const [error, setError] = useState([]);
  const totalPrice = items.reduce((total, item) => {
    return (total = total + item.price * item.qty);
  }, 0);

  async function handleSubmitCheckOut(event) {
    let error = [];
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (!hasLength(data?.name, 1)) {
      error.push("please Enter a Valid Name");
    }

    if (!hasLength(data?.street, 6)) {
      error.push("please Enter a Valid street");
    }

    if (!hasLength(data?.city, 3)) {
      error.push("please Enter a Valid City Name");
    }

    if (!hasLength(data["postal-code"], 3)) {
      error.push("please Enter a Valid Postal Code");
    }

    if (!validEmail(data?.email)) {
      error.push("please a Valid Email");
    }

    if (error.length > 0) {
      setError(error);
      return;
    } else {
      setError([]);
      const order = {
        order: { items, customer: data },
      };
      sendRequest("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: order,
      });

      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitCheckOut}>
        <h2>Check Out</h2>
        <p>Total CheckOut: {formatter.format(totalPrice)}</p>
        <Input name="name" label="Full Name"></Input>
        <Input name="email" label="Email"></Input>
        <Input name="street" label="street"></Input>
        <div className="control-row">
          <Input name="city" label="City"></Input>
          <Input name="postal-code" label="Postal Code"></Input>
        </div>
        <div className="control-row">
          <Button isTextOnly type="submit">
            Confirm
          </Button>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </div>
      </form>
      {error.length > 0 && (
        <ul>
          {error.map((err) => {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}
    </>
  );
}
