import "./item.css"
import { Link } from "react-router-dom"

function Item(props) {
    const { id, nombre, categoria, autor, precio, imagen } = props

    return (
        <div className="book-container">
            <div className="book-cover">
                <img
                    className="book-image"
                    src={imagen}
                    alt={`Portada del libro ${nombre}`}
                />
            </div>
            <div className="book-name">{nombre}</div>
            <div className="book-author">{autor}</div>
            <Link to={`/category/${categoria}`} className="book-category">
                {categoria}
            </Link>
            <div className="book-price">$ {precio}.00 MXN</div>
            <Link to={`/product/${id}`}>
                <button className="button">Ver Producto</button>
            </Link>
        </div>
    )
}

export default Item
