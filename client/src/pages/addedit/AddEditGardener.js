import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { GrUserWorker } from 'react-icons/gr';


const initialState = {
    name: "", 
    surname: "", 
    nationality: "", 
    birthYear: "", 
    deathYear: "", 
    };

  
const AddEditGardener = () => {
  const [state, setState] = useState(initialState);
  
  const {name, surname, nationality, birthYear, deathYear} = state;

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getgardener/${id}`)
      .then((res) => setState({...res.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !nationality || !birthYear || !deathYear) {
      toast.error("please fill in every field with the Gardeners details");
    } else {
      if (!id) {
        axios
        .post("http://localhost:8080/api/postgardener", {
            name, 
            surname, 
            nationality, 
            birthYear, 
            deathYear,
        })
        .then(() => {
          setState({ name: "", surname: "", nationality: "", birthYear: "", deathYear: "" });
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("Gardener record created successfully");
      } else {
        axios
        .put(`http://localhost:8080/api/updategardener/${id}`, {
            name, 
            surname, 
            nationality, 
            birthYear, 
            deathYear,
        })
        .then(() => {
          setState({ name: "", surname: "", nationality: "", birthYear: "", deathYear: "" });
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("Gardener record updated successfully");
      }  
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name]: value });
  };

  return (
    <div>
      <Container fluid><div><h5 className="form-title"><GrUserWorker />CREATE OR UPDATE A GARDENER<GrUserWorker /></h5>
    <Form onSubmit={handleSubmit}>
   <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridName">
       <Form.Label for="name"><GrUserWorker />Name</Form.Label>
       <Form.Control required textarea='true' name="name" value={state.name || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
    
     <Form.Group as={Col} controlId="formGridSurname">
     <Form.Label for="surname"> Surname</Form.Label>
       <Form.Control required textarea='true' name="surname" value={state.surname || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
   </Row>
 
   <Form.Group className="mb-3" controlId="formGridNationality">
   <Form.Label for="nationality">Nationality</Form.Label>
     <Form.Control required textarea='true' name="nationality" value={state.nationality || ""} onChange={handleInputChange}/>
     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
   </Form.Group>
 
  <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridBirthYear">
     <Form.Label for="birthYear">Birth Year</Form.Label>
       <Form.Control required type="number" name="birthYear" value={state.birthYear || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>

     <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridDeathYear">
     <Form.Label for="deathYear">Death Year</Form.Label>
       <Form.Control required type="number" name="deathYear" value={state.deathYear || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
   </Row>
   </Row>
 
   <input type="submit" value={id ? "Update" : "SAVE"} />
   <Link to="/gardener">
     <Button variant="success">Back to list of Gardeners</Button>
     </Link >

 </Form></div>
 </Container>
 </div>
  )
}

export default AddEditGardener;