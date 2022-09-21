import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';


import "../styles/ItemAbogado.css"

const ItemAbogado = (props) => {
    const {foto, nombre, id} = props;
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
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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