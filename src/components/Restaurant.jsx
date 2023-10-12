
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Restaurant({props,restaurant}) {

    
  return (

    
    <Card style={{backgroundColor:'greenyellow'}}>
      <Card.Img variant="top" src= {restaurant.photograph} />
      <Card.Body>
        <Card.Title> {restaurant.name}</Card.Title>
        <Card.Text>
            <h4> {restaurant.neighborhood}</h4>
          <h4>{restaurant.address}</h4>
        </Card.Text>
        <Button variant="primary" as ={Link} to={`/restaurant/${restaurant.id}`}>More Details</Button>
      </Card.Body>
    </Card>
  )
}

export default Restaurant