import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import "../styles/ItemAbogado.css"

const ItemAbogado = (props) => {
    const {foto, nombre, id} = props;
  return (
    <Card className='itemAbogado' style={{ width: '25rem' }}>
      <Card.Img variant="top" src={foto} className="" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
            <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemAbogado;