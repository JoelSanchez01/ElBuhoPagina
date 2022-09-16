import React from "react";
import "../styles/menuElement.css"

const MenuElement = props => {
    let { nombre, clase } = props;

    clase += " menuElement"

    return <div className={clase}>
        <a href="">
            <div className="filtro">
                <p>{nombre}</p>
            </div>
        </a>



    </div>

}

export default MenuElement;