
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

import { CartContentProvider } from './store/cart-content.jsx';

function App() {

  return (
    <>
      <CartContentProvider >

        <Header />
        <Shop />
      </CartContentProvider>
    </>
  );
}

export default App;
