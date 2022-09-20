import React from 'react';
import "../styles/ItemAbogado.css"

const ItemAbogado = (props) => {
    const {foto, nombre, telefono, direccion, redes} = props;
    return <div className="itemAbogado">
        <div className="foto">
            {foto}
        </div>

        <div className="texto">
        <h3>{nombre}</h3>
        <p>{telefono}</p>
        <p>{direccion}</p>
        <p>{redes}</p>
        </div>
        
        
    </div>
}

export default ItemAbogado;