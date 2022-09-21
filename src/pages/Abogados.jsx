import React from 'react';
import ItemAbogado from '../sections/ItemAbogado';
import "../styles/Abogados.css"
import datos from "../abogados";
const Abogados = () => {
    var data = datos;   
    return <div className="abogadoSectionFather">
                <h1>Nuestro Equipo:</h1>

                <div className='abogadoSection'>
                    {
                        data.map(abogado =>  <ItemAbogado key={abogado.id} foto={abogado.foto} nombre={abogado.nombre} direccion={abogado.direccion} telefono={abogado.telefono} red={abogado.red} link={abogado.link} /> )
                    }                    
                </div>
    </div>
}

export default Abogados;