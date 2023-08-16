import "./itemCount.css";
import React, { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1);

  function handleClickAdd() {
    setCount(count + 1);
  }

  function handleClickSub() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div className="item-count-container">
        <button className="item-count-button" onClick={handleClickSub}>
          -
        </button>
        <h2 className="count-text">{count}</h2>
        <button className="item-count-button" onClick={handleClickAdd}>
          +
        </button>
      </div>

      <button
        onClick={() => props.onConfirm(count)}
        className="item-count-button add-to-cart-button"
      >
        <h4>Añadir al carrito</h4>
      </button>
    </div>
  );
}

export default ItemCount;
