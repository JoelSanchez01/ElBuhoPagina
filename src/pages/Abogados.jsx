import React from 'react';
import ItemAbogado from '../sections/ItemAbogado';
import "../styles/Abogados.css"

const Abogados = () => {
    return <div className='abogadoSection'>
        <h1>Nuestro Equipo:</h1>
        <ItemAbogado foto="no hay" nombre="diego" telefono="12345678" especialidad="Tamalero" descripcion="Abogado Tamalero"/>
        
    </div>
}

export default Abogados;