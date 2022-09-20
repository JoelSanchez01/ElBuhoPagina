import React from 'react';
import ItemAbogado from '../sections/ItemAbogado';
import "../styles/Abogados.css"
import datos from "../abogados";
const Abogados = () => {
    var data = datos;   
    return <div className='abogadoSection'>
        <h1>Nuestro Equipo:</h1>
        {
            data.map(abogado =>  <ItemAbogado key={abogado.id} foto={abogado.foto} nombre={abogado.nombre} telefono={abogado.telefono}  direccion={abogado.direccion} /> )
        }
        
        
    </div>
}

export default Abogados;