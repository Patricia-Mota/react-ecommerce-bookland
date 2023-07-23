import "./itemDetailContainer.css"
import { useState, useEffect } from "react"
import { getLibroData } from "../../services/asyncMock"
import { Link, useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [libro, setLibro] = useState({})
    const { id } = useParams()

    async function requestProduct() {
        const respuesta = await getLibroData(id)
        setLibro(respuesta)
    }

    useEffect(() => {
        requestProduct()
    }, [])

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
            </div>
        </>
    )
}

export default ItemDetailContainer
