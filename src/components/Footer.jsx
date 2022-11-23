import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">                          
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="https://ayudaleyprotecciondatos.es/modelo-politica-privacidad/">Politicas de privacidad</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor">Defensa al consumidor</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.argentina.gob.ar/aaip/datospersonales">Proteccion de datos personales</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;