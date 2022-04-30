import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Hardware from "./components/Hardware/Hardware";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown ? <Cart onClose={hideCartHandler} /> : ""}
      <Header onShowCart={showCartHandler} />
      <main>
        <Hardware />
      </main>
    </CartProvider>
  );
}

export default App;
