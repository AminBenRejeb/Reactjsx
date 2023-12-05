import React from 'react'
import {Button,Card} from 'react-bootstrap';
import product from '../Product';


function Cardd() {
  return (
    <div>
        <Card style={{background:'#9EC8B9', width: '25rem',height:'40rem',border:'solid 2px',marginTop:'50px', marginLeft:'550px'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{color:'#1B4242',fontWeight:'bold',textDecoration:'underline'}}>{product.name}</Card.Title>
        <Card.Text>
          <br/>
          <p style={{fontWeight:'bold',color:'#092635'}}>{product.description}</p>
        </Card.Text>
        <br/><br/>
        <Button style={{backgroundColor:'#5C8374', borderColor:'black',color:'#040D12',fontWeight:'bold'}} >{product.price}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd