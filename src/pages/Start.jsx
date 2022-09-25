import React from 'react';
import "../styles/Start.css"
import MenuElement from '../sections/MenuElement';


const Start = () => {
    return <div className="principal">
        <div className='menu'>
        <MenuElement nombre="Abogados" clase="abogado" link="/abogados" />
        <MenuElement nombre="Tramites" clase="tramites" link="/tramites" />

        </div>
    </div>
}





export default Start; 