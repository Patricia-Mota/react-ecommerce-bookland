import { useEffect, useState } from "react";
import { getOrder } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";

function OrderConfirm() {
  const [order, setOrder] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function requestOrder() {
      const respuesta = await getOrder(id);
      setOrder(respuesta);
    }

    requestOrder();
  }, [id]);

  /* Separar esto en <ItemDetail .../> */
  return (
    <div style={{ marginBottom: "100px" }}>
      <h2>¡Gracias por tu compra!</h2>
      {order}
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
}

export default OrderConfirm;
