import "./cartwidget.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget(props) {
  const { getTotalItemsInCart } = useContext(cartContext);
  const totalItems = getTotalItemsInCart();
  return (
    <Link to="/cart" id="carrito">
      <div className="d-flex">
        <img
          src="/img/Iconos/carrito.svg"
          width="24px"
          alt="Carrito de compra"
        />
        <span id="total-carrito">{totalItems}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
