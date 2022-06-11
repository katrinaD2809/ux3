import React, { useEffect, useState } from 'react';
import './View.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewGardener = () => {
    const [gardener, setGardener] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/getgardener/${id}`)
            .then((res) => setGardener({ ...res.data[0] }));
        }, [id]);
  return (
    <div>
      <Container fluid>
      <Card>
    <Card.Header>{id}</Card.Header>
    <Card.Body>
      <Card.Title>{gardener.name} {gardener.surname}</Card.Title>
      <Card.Text>
      <p>{gardener.nationality}</p>
      <p>{gardener.bithYear}</p>
      <p>{gardener.deathYear}</p>
      </Card.Text>
      <Link to="/Gardener">
      <Button variant="success">Back to list of Gardeners</Button>
      </Link >
    </Card.Body>
  </Card>
  </Container>
  </div>
  )
}

export default ViewGardener;