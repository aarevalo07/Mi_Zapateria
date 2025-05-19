import { useEffect, useState } from "react";

                                                                            
const API1 = "https://dummyjson.com/products/category/mens-shoes";
const API2 = "https://dummyjson.com/products/category/womens-shoes";
const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDatos = async () => {
        try {
            const response1 = await fetch(API1);
            const response2 = await fetch(API2);

            if (!response1.ok && !response2.ok) {
                throw new Error(`HTTP error! status: \nAPI: ${response1.status} \nAPI2: ${response2.status}`);
            }

            const data1 = await response1.json();
            const data2 = await response2.json();

            setProductos([...data1.products, ...data2.products]); // Esto es igual a data1.products.concat(data2.products)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDatos();
        activarLink();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando contenido...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar el contenido</h4>
                <p>{error}</p>
            </div>
        );
    }

    function activarLink() {
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.classList.remove("active");
        });
        const inicioLink = document.getElementById("catalogo");
        inicioLink.classList.add("active");
    }

    return (
        <div className="container px-xl-3">
            <h1 className="text-center fs-1 py-4">Catalogo</h1>

            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="card-header p-0">
                                <img src={producto.images[1]} className="img-fluid" alt={producto.title} />
                            </div>

                            <div className="card-body text-center">
                                <h3>{producto.title}</h3>

                                <p>
                                    <b>Precio:</b>
                                    <span className="text-info fw-medium"> ${producto.price}</span>
                                    <br />
                                    <b>Stock:</b> <span className="badge text-bg-success p-1 fw-medium"> {producto.stock}</span>
                                </p>

                                <p className="m-0 lh-1">
                                    <span className="badge rounded-pill text-bg-primary brand me-1">{producto.brand}</span>
                                    {producto.tags.map((tag, index) => (
                                        <span key={index} className="badge rounded-pill text-bg-primary tags me-1 mt-1">
                                            {tag}
                                        </span>
                                    ))}
                                </p>
                            </div>

                            <div className="card-footer text-center">
                                <a
                                    href="#"
                                    className="btn btn-sm fw-medium btn-outline-success me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${producto.id}`}
                                >
                                    Comprar
                                </a>
                                <a href="#" className="btn btn-sm fw-medium btn-outline-info">
                                    Ver detalles
                                </a>
                            </div>
                        </div>

                        {/* Modal */}
                        <div className="modal fade" id={producto.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                                            {producto.title}
                                        </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-4 col-12 justify-content-center d-flex">
                                                <img className="" src={producto.thumbnail} alt={producto.title} />
                                            </div>
                                            <div className="col-lg-8 col-md-12">
                                                <h3>{producto.name}</h3>
                                                <p>
                                                    <b>Marca: </b>
                                                    <span className="text-info-emphasis fw-bold fs-6">{producto.brand}</span>
                                                    <br />
                                                    <b>Precio: $</b>
                                                    <span className="text-info fw-medium"> {producto.price}</span>
                                                    <br />
                                                    <b>Categoria:</b> {producto.category}
                                                    <br />
                                                    <b>Etiquetas:</b>{" "}
                                                    {producto.tags.map((tag, index) => (
                                                        <span key={index} className="badge rounded-pill text-bg-primary tags me-1">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    <br />
                                                </p>
                                                <label for="cantidad" class="form-label">
                                                    Cantidad a comprar
                                                </label>
                                                <input type="range" class="form-range" min="0" max={producto.stock} id="cantidad"></input>
                                                <p>{producto.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
