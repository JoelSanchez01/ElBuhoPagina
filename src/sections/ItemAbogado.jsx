import React from 'react';
import "../styles/ItemAbogado.css"

const ItemAbogado = (props) => {
    const {foto, nombre, id} = props;
    return <>
        <a className='itemAbogado' href="">        
            <div className="foto">
                <img src={foto} alt="" />
            </div>
            <div className="texto">
                    <h2>{nombre}</h2>
            </div>
        </a>
    </>
}

export default ItemAbogado;