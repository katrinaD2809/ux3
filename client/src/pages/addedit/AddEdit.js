import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { GiPlantRoots } from 'react-icons/gi';
import { FaCalendarAlt } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { BiPhotoAlbum, BiCategory } from 'react-icons/bi';
import { MdOutlineFormatListNumbered, MdOutlineSubtitles } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

const initialState = {
  plantTitle: "", 
  latinTitle: "", 
  yearDiscovered: "", 
  category: "", 
  amountSold: "", 
  countryOrigin: "", 
  plantImagePath: "", 
  gardenerID: "",
  };

  
const AddEdit = () => {
  const [state, setState] = useState(initialState);
 
  const {plantTitle, latinTitle, yearDiscovered, category, amountSold, countryOrigin, plantImagePath, gardenerID} = state;

  const { id } = useParams();

  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/get/${id}`)
      .then((res) => setState({...res.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!plantTitle || !latinTitle || !yearDiscovered || !category || !amountSold || !countryOrigin || !plantImagePath || !gardenerID) {
      toast.error("please fill in every field with plant info");
    } else {
      if (!id) {
        axios
        .post("http://localhost:8080/api/post", {
          plantTitle, 
          latinTitle, 
          yearDiscovered, 
          category, 
          amountSold, 
          countryOrigin, 
          plantImagePath, 
          gardenerID,
        })
        .then(() => {
          setState({ plantTitle: "", latinTitle: "", yearDiscovered: "", category: "", amountSold: "", countryOrigin: "", plantImagePath: "", gardenerID: "" });
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("Plant created successfully");
      } else {
        axios
        .put(`http://localhost:8080/api/update/${id}`, {
          plantTitle, 
          latinTitle, 
          yearDiscovered, 
          category, 
          amountSold, 
          countryOrigin, 
          plantImagePath, 
          gardenerID,
        })
        .then(() => {
          setState({ plantTitle: "", latinTitle: "", yearDiscovered: "", category: "", amountSold: "", countryOrigin: "", plantImagePath: "", gardenerID: "" });
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("Plant updated successfully");
      }  
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name]: value });
  };

  return (
    <div>
      <Container fluid><div><h5 className="form-title"><GiPlantRoots />CREATE OR UPDATE A PLANT<GiPlantRoots /></h5>
    <Form onSubmit={handleSubmit}>
   <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridPlantTitle">
       <Form.Label for="plantTitle"><GiPlantRoots />Plant Title</Form.Label>
       <Form.Control required type="text" name="plantTitle" value={state.plantTitle || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
    
     <Form.Group as={Col} controlId="formGridLatinTitle">
     <Form.Label for="latinTitle"><MdOutlineSubtitles />Latin Title</Form.Label>
       <Form.Control required type="text" name="latinTitle" value={state.latinTitle || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
   </Row>
 
   <Form.Group className="mb-3" controlId="formGridYearDiscovered">
   <Form.Label for="yearDiscovered"><FaCalendarAlt />Year Discovered</Form.Label>
     <Form.Control required type="number" name="yearDiscovered" value={state.yearDiscovered || ""} onChange={handleInputChange}/>
     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
   </Form.Group>
 
   <Form.Group className="mb-3" controlId="formGridCategory">
   <Form.Label for="category"><BiCategory />Category</Form.Label>
     <Form.Control required type="text" name="category" value={state.category || ""} onChange={handleInputChange}/>
     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
   </Form.Group>
 
   <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridAmountSold">
     <Form.Label for="amountSold"><MdOutlineFormatListNumbered />Amount Sold</Form.Label>
       <Form.Control required type="number" name="amountSold" value={state.amountSold || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       <div className="input-error">Please enter a year between 1800 and 2000.</div>
     </Form.Group>
 
     <Form.Group as={Col} controlId="formGridPlantImagePath">
     <Form.Label for="plantImagePath"><BiPhotoAlbum />Plant Image</Form.Label>
       <Form.Select name="plantImagePath" onChange={handleInputChange} value={state.plantImagePath || ""}>
         <option>Choose...</option>
         <option>imagegoeshere1</option>
         <option>imagegoeshere2</option>
         <option>imagegoeshere3</option>
         <option>imagegoeshere4</option>
       </Form.Select>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
   
     <Form.Group as={Col} controlId="formGridCountryOrigin">
     <Form.Label for="countryOrigin"><TbWorld />Country of Origin</Form.Label>
       <Form.Control required type="text" name="countryOrigin" value={state.countryOrigin || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridGardenerID">
     <Form.Label for="gardenerID"><GrUserWorker />Gardener:</Form.Label>
       <Form.Control required type="text" name="gardenerID" value={state.gardenerID || ""} onChange={handleInputChange}/>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     </Form.Group>
   </Row>
 
   <input type="submit" value={id ? "Update" : "SAVE"} />
   <Link to="/plants">
     <Button variant="success">Back to list of Plants</Button> 
     </Link >

 </Form></div>
 </Container>
 </div>
  )
}

export default AddEdit;