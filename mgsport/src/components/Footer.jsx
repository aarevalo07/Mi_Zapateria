//

const Footer = () => {
    return (
      <div className="bg-black">
        <div className="container" bis_skin_checked={1}>
          {" "}
          <footer className="py-2 my-4 text-center">
            {" +40 años de experiencia en el mercado del calzado."}
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {" "}
              <li className="nav-item">
                <a href="\" className="nav-link px-2 text-body-secondary">
                  Inicio
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="\catalogo" className="nav-link px-2 text-body-secondary">
                  Productos
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="\contacto" className="nav-link px-2 text-body-secondary">
                  Contacto
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Acerca de Nosotros
                </a>
              </li>{" "}
            </ul>{" "}
            <p className="text-body-secondary">
              © MariangelaSport C.A
            </p>
          </footer>{" "}
        </div>
      </div>
    );
};

export default Footer;