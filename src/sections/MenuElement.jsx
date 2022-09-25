import React from "react";
import "../styles/menuElement.css"
import { Link } from "react-router-dom";

const MenuElement = props => {
    let { nombre, clase, link } = props;

    clase += " menuElement"

    return <div className={clase}>
        
        <Link to={link}>
            <div className="filtro">
                <p>{nombre}</p>
            </div>
        </Link>



    </div>

}

export default MenuElement;