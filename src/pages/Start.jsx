import React from 'react';
import "../styles/Start.css"
import MenuElement from '../sections/MenuElement';


const Start = () => {
    return <div className="principal">
        <h1>Busca El Buho</h1>
        <div className='menu'>
        <MenuElement nombre="Abogados" clase="abogado" />
        <MenuElement nombre="Tramites" clase="tramites" />

        </div>
    </div>
}





export default Start; 