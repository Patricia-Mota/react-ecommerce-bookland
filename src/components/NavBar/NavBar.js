import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container fluid">
                {/* <!-- Brand -->   */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="/img/Logo/blue-logo.svg"
                        width="100px"
                        alt="Logo Bookland"
                    />
                </Link>

                {/* <!-- Botón del menú responsive --> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Elementos del menú colapsable --> */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="ul-gap navbar-nav mb-2 mb-lg-0 justify-content-center align-items-center w-100">
                        <li className="nav-item">
                            <Link className="nav-link nl" to="/">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link nl" to="category/novela">
                                Novelas
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link nl"
                                to="/category/ciencia"
                            >
                                Ciencia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nl" to="/category/diseño">
                                Diseño
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link nl"
                                to="/category/autodesarrollo"
                            >
                                Desarrollo personal
                            </Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
