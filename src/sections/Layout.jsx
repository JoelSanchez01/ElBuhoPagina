import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Layout.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="texto">
                <Link to="/abogados"><h3>Abogados</h3></Link>
                <Link to="/"><h1>BuscaElBuho</h1></Link>
                <Link to="/tramites"><h3>Tramites</h3></Link>
            </div>

            <div className="lodemas">
                {children}

            </div>
        </div>
    )
}

export default Layout;