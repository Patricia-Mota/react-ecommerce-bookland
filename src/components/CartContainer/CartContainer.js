import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function CartContainer() {
  const { cart, removeItem, getTotalAmountInCart, clearCart } =
    useContext(cartContext);
  const navigate = useNavigate();
  const totalAmount = getTotalAmountInCart();

  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: {
        name: "Pattie",
        email: "patricia.mota.cc@gmail.com",
        phone: "1234-1234",
      },
      date: new Date(),
      total: totalAmount,
    };

    try {
      const idOrder = await createOrder(orderData);
      MySwal.fire({
        title: <p>Gracias por tu compra, tu numero de orden es {idOrder}</p>,
        icon: "success",
      }).then(() => {
        navigate(`/order-confirmation/${idOrder}`);
      });
    } catch (error) {
      MySwal.fire({
        title: <p>No se pudo realizar la compra: {error.message}</p>,
        icon: "error",
      });
    }

    // Luego de la compra: vaciar el carrito
    clearCart();
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          {console.log(item)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.precio}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total ${item.count * item.precio}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: ${totalAmount}</div>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default CartContainer;
