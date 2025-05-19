import { useEffect } from "react";
import logoContact from "../../assets/contacto.svg";

const Contacto = () => {
    useEffect( () => {
        activarLink();   
    }, [])

    function activarLink() {
            const links = document.querySelectorAll(".nav-link");
            links.forEach((link) => {
                link.classList.remove("active");
            });
            const inicioLink = document.getElementById("contacto");
            if (inicioLink) {
                // Asegúrate de que el elemento exista antes de intentar manipularlo
                inicioLink.classList.add("active");
            }
        }

    return (
        <div className="container py-5">
            <div className="row">
                {/* MODIFICAR COMO UN LOCO */}
                <div className="col-md-12 col-lg-6 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-header p-0">
                            <img src={logoContact} alt="logo de Contacto" className="img-fluid" />
                        </div>
                        <div className="card-body">
                            <h1 className="fs-2">Acerca de nosotros</h1>
                            <p className="fs-6 mt-1">
                                Estamos a tu dispocisión desde hace 40 años llevando los zapatos de mejor calidad y precio hasta tu hogar
                            </p>
                            <a href="#" class="fa-brands fa-whatsapp me-3 fs-4" style={{color: "#33FF88", textDecoration: "none",}}></a>
                            <a href="#" class="fa-brands fa-instagram me-3 fs-4" style={{color: "#E70D0D", textDecoration: "none",}}></a>
                            <a href="#" class="fa-brands fa-facebook  fs-4" style={{color: "#4466FF", textDecoration: "none",}}></a>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <img className="col-lg-4 col-md-12 ratio-1x1 img-fluid" src alt="Imagen Visible desde la fuente" />
                                <img className="col-lg-4 col-md-12 ratio-1x1 img-fluid" src alt="Imagen Visible desde la entrada del pasillo" />
                                <img className="col-lg-4 col-md-12 ratio-1x1 img-fluid" src alt="Imagen del local" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6 mb-4">
                    <div className="card h-100 text-center" id="ubicacion">
                        <div className="card-header">
                            <h5 className="fs-3">Estamos localizados en CC Mi Viejo Mercado - local K-3/M-5</h5>
                        </div>
                        <div className="card-body">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.01430784162!2d-68.00560999999999!3d10.179492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzQ2LjIiTiA2OMKwMDAnMjAuMiJX!5e0!3m2!1ses-419!2sve!4v1736210774722!5m2!1ses-419!2sve"
                                className="maps"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GeoLocalizacion"
                            ></iframe>
                        </div>
                        <div className="card-footer">
                            <a className="btn btn-info" href="https://maps.app.goo.gl/8FSrD8kZqATdUK2N8" target="_blank">
                                Ubicación Exacta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
