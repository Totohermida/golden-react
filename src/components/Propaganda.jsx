import React from"react";

const Propaganda = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="imagenes/descuento.png" alt="Descuento" className="img-fluid" width="350" /></p>
                    <h4>Aprovecha nuestro 30% de descuento durante el mes de diciembre!</h4>
                    <p><button class="btn btn-warning">Ver mas</button></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="imagenes/modelo.png" alt="Modelo Nuevo" className="img-fluid" width="350" /></p>
                    <h4>Ya viste nuestro ultimo modelo?</h4>
                    <p>Que estas esperando?</p>
                    <p><button class="btn btn-warning">Ver mas</button></p>
                </div>
            </div>
        </div>
    )
}

export default Propaganda;