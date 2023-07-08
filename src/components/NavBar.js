import "./navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container fluid">
        {/* <!-- Brand -->   */}
        <a className="navbar-brand" href="/">
          <img src="img/Logo/blue-logo.svg" width="100px" alt="Logo Bookland" />
        </a>

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
              <a className="nav-link nl active" href="/">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nl" href="/libros.html">
                Libros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nl" href="/autores.html">
                Autores
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nl" href="/contacto.html">
                Contacto
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nl" href="/blog.html">
                Blog
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
