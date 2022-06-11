import React from 'react';
import { useState } from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Home.css';




const Home = () => {
  // let plantparent = 'mom';
  const [plantparent, setPlantparent] = useState('mom');
  const [location, setLocation] = useState('indoor');

  const handleClick = () => {
    // plantparent = 'dad';
    setPlantparent('dad');
    setLocation('outdoor');
  }

  return (
    <div className="home">
      
      <Container fluid><div>
      <h2>Roseworths Plant Subscription</h2>
      <p>I'm a { plantparent } of { location } plants</p>
      <button className='btn btn-success' onClick={handleClick}>G'day plant parents</button>
      <p></p>

      
      <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" img src={require('../images/5176253.jpg')} />
  <Card.Body>
    <Card.Title>Find Your Perfect Plant</Card.Title>
    <Card.Text>
      Welcome to Roseworth's. We provide Australia's favourite plants
    </Card.Text>
    <Link to='/plants'><Button variant="success">See all Plants</Button></Link>
  </Card.Body>
</Card>
</div>
</div>
</Container> 
      </div>
  );
}
 
export default Home;