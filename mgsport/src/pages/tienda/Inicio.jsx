import { useEffect } from "react";
import ilustracion from "../../assets/ilustration.svg";

const Inicio = () => {
    useEffect(() => {
        function activarLink() {
            const links = document.querySelectorAll(".nav-link");
            links.forEach((link) => {
                link.classList.remove("active");
            });
            const inicioLink = document.getElementById("inicio");
            if (inicioLink) {
                // Asegúrate de que el elemento exista antes de intentar manipularlo
                inicioLink.classList.add("active");
            }
        }
        activarLink();
    }, []); // El array vacío como segundo argumento asegura que el efecto se ejecute solo una vez después del montaje

    return (
        <div className="container-fluid px-0 pt-5 hero">
            <section className="row m-0">
                <div className="col-md-12 col-lg-6 align-content-center text-center mb-2">
                    <h1 className="fw-bold fs-1">Tu mejor opción para el calzado</h1>
                    <p className="fs-3">Más de 40 años en el mercado del calzado</p>
                    <a href="\catalogo" className="btn btn-outline-info btn-lg">
                        Ver catalogo
                    </a>
                </div>
                <figure className="col-md-12 col-lg-6 mb-2 d-flex justify-content-center">
                    <img src={ilustracion} alt="ilustracion" className="img-fluid" style={{maxHeight: 450}} />
                </figure>
            </section>

            {/* SVG para el fondo (Son las olas)*/}
            <div style={{ height: 150, overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path
                        d="M0.00,49.98 C176.35,260.05 160.55,-110.02 499.72,113.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "#77f0f044" }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Inicio;
