import { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Cart from "./Cart";


export default function Header() {
  return (
    <>
      <header id="main-header">
        <nav id="title">
          <img src={logoImage} alt="Food App logo" />
          <p> React Food App</p>
        </nav>
        <div>
         <Cart></Cart>
        </div>
      </header>
    </>
  );
}
