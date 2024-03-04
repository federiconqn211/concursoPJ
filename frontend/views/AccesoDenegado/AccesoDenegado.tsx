import React from "react";

export default function AccesoDenegado() {
return(
    <>
        <div className={'d-flex justify-content-center text-black-50'}>
            <h3>No tiene permiso para acceder al contenido</h3>
        </div>
        <div className={'d-flex justify-content-center text-black-50'}>
            <img style={{width: '100px'}} src="images/acceso denegado.png"/>
        </div>
    </>
);
}