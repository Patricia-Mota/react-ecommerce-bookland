import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(book, count) {
    const newCart = [...cart];
    if (isInCart(book.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === book.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...book, count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Para vaciar el carrito
  function clearCart() {
    setCart([]);
  }

  function getTotalItemsInCart() {
    let total = 0;
    for (let item of cart) {
      total += item.count;
    }
    return total;
  }

  function getTotalAmountInCart() {
    let total = 0;
    for (let item of cart) {
      total += item.precio * item.count;
    }
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getTotalAmountInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
