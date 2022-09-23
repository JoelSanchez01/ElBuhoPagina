import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';


import "../styles/ItemAbogado.css"

const ItemAbogado = (props) => {
  const { id, foto, nombre, direccion, telefono, red, link } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className='itemAbogado' style={{ width: '23rem' }}>
        <Card.Img variant="top" src={foto} className="" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleShow}>Ver Mas</Button>
        </Card.Footer>
      </Card>

      <Modal show={show} className="modal" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mas Sobre La Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={foto} className="fotomodal" alt="" />
          <h3>{nombre}</h3>
          <p>Dirección: {direccion}</p>
          <p>Telefono: {telefono}</p>
          {red != null &&
            <>
              <a href={link}>{red}</a>
            </>
          }
          <div className="ec-stars-wrapper">
	          <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
	          <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
	          <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
	          <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
	          <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
          </div>

          <div className="resena">
            <textarea name="" id="" cols="30" rows="10" placeholder='Escribe aqui tu resena'></textarea>
            <Button variant="primary">Publicar</Button>
          </div>

        

          </Modal.Body>

          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
    </>




                );
}

                export default ItemAbogado;