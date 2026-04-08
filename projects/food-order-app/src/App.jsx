import logo from "./assets/logo.jpg";
import Cart from "./components/cart/Cart";
import Product from "./components/products/Product";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <header id="main-header">
          <div id="title">
            <img src={logo}></img>
            <p>Food Order Delivery</p>
          </div>
          <Cart></Cart>
        </header>
        <main>
          <Product></Product>
        </main>
      </CartContextProvider>
    </>
  );
}

export default App;
