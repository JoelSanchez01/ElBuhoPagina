import React from 'react';
import "../styles/Tramites.css"
import TramitesArreglo from "../TramitesArreglo";
import Accordion from 'react-bootstrap/Accordion';


const Tramites = ()  => {
    const datos = TramitesArreglo;
    return <div className="tramite">
        <h1>Tramites:</h1>


        <Accordion defaultActiveKey="0">
            {
                datos.map(tramite =>  <Accordion.Item key={tramite.id} eventKey={tramite.id}>
                <Accordion.Header>{tramite.nombre}</Accordion.Header>
                <Accordion.Body>
                <ul>
                        { tramite.documentos.map(docs => 
                        <li key={docs}>{docs}</li>
                        )}
                    </ul>                  <p>Costo: {tramite.costo}</p>
                  <p>Opciones para realizar </p>
                    <ul>
                        { tramite.opciones.map(opcion => 
                        <li key={opcion}>{opcion}</li>
                        )}
                    </ul>
                    {tramite.link != null &&
                  <a href={tramite.link}>Enlace</a>}

                </Accordion.Body>
              </Accordion.Item>
           
            )
            }
      </Accordion>
    </div>
}

export default Tramites;