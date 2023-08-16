import { useEffect, useState } from "react";
import { getOrder } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";

function OrderConfirm() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function requestOrder() {
      setLoading(true);
      const respuesta = await getOrder(id);
      setOrder(respuesta);
      setLoading(false);
    }

    requestOrder();
  }, [id]);

  if (loading) return "loading...";
  return (
    <div style={{ padding: "2.75rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h2 className="text-center">¡Gracias por tu compra!</h2>
        <h4 className="text-center">Esperamos que disfrutes tu lectura.</h4>
        <p>A continuación se desglosan los detalles de tu compra:</p>
        <div
          style={{
            width: "100vw",
            borderTop: "1px solid gray",
            marginLeft: "-40px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "fit-content",
            paddingTop: 16,
          }}
        >
          <h4>Datos de la compra:</h4>
          <p>Nombre: {order.buyer.name}</p>
          <p>Email: {order.buyer.email}</p>
          <p>Número: {order.buyer.phone}</p>
          <p>
            Fecha de compra:{" "}
            {new Date(order.date.seconds * 1000).toLocaleDateString("es", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            Número total de libros comprados:{" "}
            {order.items.reduce((total, libro) => total + libro.count, 0)}
          </p>
          <p>
            Costo total de compra: $
            {order.items.reduce(
              (total, libro) => total + libro.precio * libro.count,
              0
            )}
          </p>
        </div>
        <div>
          <h4
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              paddingTop: 16,
            }}
          >
            Datos de los libros
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              padding: "1rem",
            }}
          >
            {order.items.map((libro) => (
              <div
                key={libro.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5 className="text-center">{libro.nombre}</h5>
                <img
                  src={libro.imagen}
                  alt={`Imagen del libro ${libro.nombre}`}
                  style={{ height: 312 }}
                />
                <p>
                  Categoría:{" "}
                  <Link to={`/${libro.categoria}`}>{libro.categoria}</Link>
                </p>
                <p>Precio unitario: ${libro.precio}</p>
                <p>Cantidad: {libro.count}</p>
                <p>Precio total: ${libro.precio * libro.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirm;
