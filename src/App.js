import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                {/* Ruta con URL dinamico */}
                <Route path="/product/:id" element={<ItemDetailContainer />} />

                {/* Rota 404 */}
                <Route path="*" element={<h1>Page not found: 404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
