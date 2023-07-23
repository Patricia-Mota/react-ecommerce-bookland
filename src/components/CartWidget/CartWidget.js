import "./cartwidget.css";

function CartWidget(props) {
  return (
    <a href="/carrito.html" id="carrito">
      <div className="d-flex">
        <img
          src="/img/Iconos/carrito.svg"
          width="24px"
          alt="Carrito de compra"
        />
        <span id="total-carrito">0</span>
      </div>
    </a>
  );
}

export default CartWidget;
