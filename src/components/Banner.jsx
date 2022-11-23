import React from"react";

const Banner = () => {
    return (
        <div className="container-fluid" bg-warning>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="imagenes/adidas.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/billabong.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/fila.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/lecoq.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/puma.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/reebok.png" alt="Marcas" width="130" />
                    </div>
                    <div className="col">
                        <img src="imagenes/ripcurl.png" alt="Marcas" width="130" />
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Banner;