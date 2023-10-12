
import { useParams } from 'react-router-dom'
import React from 'react'
import {Card, Col, Container, Row, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function RestaurantDetails() {

  const restaurantsData = useSelector((state)=> state.restaurants.data);

    const {id} = useParams();
    
    
    const restaurant = restaurantsData.find((item) => item.id == id)

    console.log(restaurant);
  return (
    <Container>
        <Row>
            <Col className='col-md-4'>
                {
                    restaurant &&(
                   
                        <Card style={{backgroundColor:'greenyellow'}}>
                        <Card.Img variant="top" src= {restaurant.photograph} />
                        <Card.Body>
                          <Card.Title> {restaurant.name}</Card.Title>
                          <Card.Text>
                              <h3> {restaurant.neighborhood}</h3>

                            <h4>{restaurant.address}</h4>
                         </Card.Text>
                         </Card.Body>
                         </Card>
         
         )
        }
    </Col>
    <Col className='md-4'>
                {
                    restaurant &&(
                   
                        <Card style={{ width: '18rem' }}>
                         <h4><b><em>Operating_hours</em></b></h4>
      <ListGroup variant="flush">
        <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
        
     </ListGroup>
     </Card>
     )
        } 
       </Col>

        <Col className='md-4'>
        {
            restaurant &&(
                <Card>
          <Card.Body>
            <h4><b><em>Reviews</em></b></h4>
          <Card.Text>Name:{restaurant.reviews[0].name}</Card.Text>
          <Card.Text>Date:{restaurant.reviews[0].date}</Card.Text>
          <Card.Text>Ratings:{restaurant.reviews[0].rating}</Card.Text>
          <Card.Text>Coments:{restaurant.reviews[0].comments}</Card.Text>
          <Card.Text>Name:{restaurant.reviews[1].name}</Card.Text>
          <Card.Text>Date:{restaurant.reviews[1].date}</Card.Text>
          <Card.Text>Ratings:{restaurant.reviews[1].rating}</Card.Text>
          <Card.Text>Coments:{restaurant.reviews[1].comments}</Card.Text>
          <Card.Text>Name:{restaurant.reviews[2].name}</Card.Text>
          <Card.Text>Date:{restaurant.reviews[2].date}</Card.Text>
          <Card.Text>Ratings:{restaurant.reviews[2].rating}</Card.Text>
          <Card.Text>Coments:{restaurant.reviews[2].comments}</Card.Text>
        </Card.Body>
      </Card>
         )
        } 
       </Col>
      
    
    </Row>
    </Container>
  )
}

export default RestaurantDetails