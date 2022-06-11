import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container, Button } from 'react-bootstrap';
import { BiHelpCircle } from 'react-icons/bi';


function Helper() {
  return (
    <div><BiHelpCircle /> <h2>Help Centre</h2><BiHelpCircle />
    <Container fluid>
    <Card>
  <Card.Body>
    <h3>Help</h3>
    <p>To view all Plants navigate to this page <Link to="/plants">PLANT LIST</Link></p>
    <p>To view the details of a specific plant the View button is located at the far right of the screen</p>
    <p>To edit the details of a specific plant click on the Edit button in the last column on the right.</p>
    <p>To delete the details of a specific plant click on the Delete button, in between Edit and View. You will be asked to confirm your action before the record is deleted. You will remain on the page and the page will refresh.</p>
    <p>To Add a new Plant to the system. Navigate to the plants list,<Link to="/plants">PLANT LIST</Link>, 
    you will see the ADD PLANT button at the top of the screen. Visit this page and fill out the form.</p>

    <p>To view all Gardeners navigate to this page <Link to="/gardener">GARDENER LIST</Link></p>
    <p>To view the details of a specific Gardener the View button is located at the far right of the screen</p>
    <p>To edit the details of a specific Gardener click on the Edit button in the last column on the right.</p>
    <p>To delete a specific Gardener click on the Delete button, in between Edit and View. You will be asked to confirm your action before the record is deleted. You will remain on the page and the page will refresh, and the record will no longer appear in the list.</p>
    <p>To Add a new Gardener to the system. Navigate to the Gardeners list,<Link to="/gardener">GARDENER LIST</Link>, 
    you will see the ADD GARDENER button at the top of the screen. Visit this page and fill out the form.</p>

  <h3>About</h3>
  <p>Roseworths Plant Subscription Service is an app that is used by staff of Roseworths to update the catalogue of plants that customers can buy. The aim is to manage the database of plants and repsective gardeners. The end goal is to populate a front end UI for customers to order a plant on subscription with the data loaded into this app.
  It is important to load the system with accurate data, as it will eventually be used to drive revenue for the business.</p>
  <p></p>

  <Link to='/'><Button variant="success">Go Back to the Homepage</Button></Link>
</Card.Body>
</Card>
  </Container>
    </div>
  )
}

export default Helper;