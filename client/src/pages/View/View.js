import React, { useEffect, useState } from 'react';
import './View.css';
import Container from 'react-bootstrap/Container'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const [plant, setPlant] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/get/${id}`)
            .then((res) => setPlant({ ...res.data[0] }));
        }, [id]);
  return (
    <div>
      
      <Container fluid><Card>
    <Card.Header>{id}</Card.Header>
    <Card.Body>
      <Card.Title>{plant.plantTitle}</Card.Title>
      <Card.Text>
      <p>{plant.latinTitle} </p>
      <p>   {plant.yearDiscovered} </p>
      <p>   {plant.category}</p>
      <p>   {plant.amountSold}</p>
      <p>   {plant.countryOrigin}</p>
      <p>   {plant.plantImage}</p>
      <p>   {plant.gardenerID}</p>
      </Card.Text>
      <Link to="/plants">
      <Button variant="success">Back to list of Plants</Button>
      </Link >
    </Card.Body>
  </Card>
  </Container>
  </div>
  )
}

export default View;