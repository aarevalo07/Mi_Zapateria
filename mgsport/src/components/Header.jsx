import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-3" href="#"><img width={100} src={logo} alt="logo" className="me-2" />MariangelaSport</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link" id="inicio" aria-current="page" href='#'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/catalogo"} className="nav-link" id="catalogo" aria-current="page" href="#">Catalogo</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="variedad" href="/variedad" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Variedad
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Deportivos</a></li>
                                <li><a className="dropdown-item" href="#">Running</a></li>
                                <li><a className="dropdown-item" href="#">Casuales</a></li>
                                <li><a className="dropdown-item" href="#">De vestir</a></li>
                                <li><a className="dropdown-item" href="#">Botas deportivas</a></li>
                                <li><a className="dropdown-item" href="#">Botas</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Damas</a></li>
                                <li><a className="dropdown-item" href="#">Caballeros</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contacto"} className="nav-link" id="contacto" aria-current="page" href="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Header