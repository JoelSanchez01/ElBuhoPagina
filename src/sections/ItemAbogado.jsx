import React from 'react';

const ItemAbogado = (props) => {
    const {foto, nombre, telefono, especialidad, descripcion} = props;
    return <div className="itemAbogado">
        {foto}
        <h3>{nombre}</h3>
        <p>{telefono}</p>
        <p>{especialidad}</p>
        <p>{descripcion}</p>
        
        
    </div>
}

export default ItemAbogado;