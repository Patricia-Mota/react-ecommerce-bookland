import "./itemListContainer.css"
import { useState, useEffect } from "react"
import getData, { getCategoryData } from "../../services/asyncMock"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"

function ItemListContainer(props) {
    const [libros, setLibros] = useState([])
    const { categoryId } = useParams()

    async function requestLibros() {
        const respuesta = categoryId
            ? await getCategoryData(categoryId)
            : await getData()
        setLibros(respuesta)
    }

    useEffect(() => {
        requestLibros()
    }, [categoryId])

    return (
        <div className="container">
            <h1 className="text-center">Listado de Productos</h1>
            <div className="libros">
                {libros.map((libro) => (
                    <Item key={libro.id} {...libro} />
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer
