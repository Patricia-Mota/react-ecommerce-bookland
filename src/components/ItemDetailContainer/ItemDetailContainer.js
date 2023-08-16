import "./itemDetailContainer.css";
import { useState, useEffect, useContext } from "react";
import { getLibroData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ItemCount from "../ItemCount/ItemCount";

const MySwal = withReactContent(Swal);

function ItemDetailContainer() {
  const [libro, setLibro] = useState({});

  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

  async function requestProduct() {
    const respuesta = await getLibroData(id);
    setLibro(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, [id]);

  function handleAddToCart(count) {
    addToCart(libro, count);
    MySwal.fire({
      title: <p>Libro agregado al carrito, cantidad: {count}</p>,
      icon: "success",
    });
  }

  return (
    <>
      <h2 className="title">{libro.nombre}</h2>
      <div className="book-container">
        <div className="book-cover">
          <img
            className="book-image"
            src={libro.imagen}
            alt={`Portada del libro ${libro.nombre}`}
          />
        </div>
        <div className="book-author">{libro.autor}</div>
        <Link to={`/category/${libro.categoria}`} className="book-category">
          {libro.categoria}
        </Link>
        <div className="book-price">$ {libro.precio}.00 MXN</div>
        <ItemCount onConfirm={handleAddToCart} />
      </div>
    </>
  );
}

export default ItemDetailContainer;
