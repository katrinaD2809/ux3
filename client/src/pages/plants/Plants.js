import React from 'react';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import "./Plants.css";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { GiPlantRoots } from 'react-icons/gi';
import { FaCalendarAlt } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { BiPhotoAlbum, BiCategory } from 'react-icons/bi';
import { MdOutlineFormatListNumbered, MdOutlineSubtitles } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

function Plants() {
    const [data, setData] = useState([]);
           

    const loadData = async () => {
        const response = await axios.get("http://localhost:8080/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData()
        }, []);
    

    const deletePlant = (id) => {
        if (window.confirm("do you really want to delete this plant??")) {
            axios.delete(`http://localhost:8080/api/remove/${id}`);
            toast.success("Plant has been deleted");
            setTimeout(() => loadData(), 300);
        }
    };
    return (
        <div>
        <h1 className="plant-preview">Plants</h1>
        <Container fluid>    
        <Link to="/addPlant"><Button variant="success" className="btn btn-plant">Add a plant</Button></Link>
        <Table striped bordered hover size="sm">
            <thead>
                  <tr>
                      <th>ID</th>
                      <th><GiPlantRoots />Plant Title</th>
                      <th><MdOutlineSubtitles />Latin Title</th>
                      <th><FaCalendarAlt />Year Discovered</th>
                      <th><BiCategory />Category</th>
                      <th><MdOutlineFormatListNumbered />Amount Sold</th>
                      <th><TbWorld />Country of Origin</th>
                      <th><BiPhotoAlbum />Image</th>
                      <th><GrUserWorker />Gardener ID</th>
                   </tr>
            </thead>
                <tbody>
                    {data && 
                    data.map((plant, index) => {
                        return (
                            <tr key={plant.plantID}>
                                <th scope="row">{index + 1}</th>
                                <td>{plant.plantTitle}</td>
                                <td>{plant.latinTitle}</td>
                                <td>{plant.yearDiscovered}</td>
                                <td>{plant.category}</td>
                                <td>{plant.amountSold}</td>
                                <td>{plant.countryOrigin}</td>
                                <td>{plant.plantImage}</td>
                                <td>{plant.gardenerID}</td>
                                <td>
                                    <Link to={`/update/${plant.plantID}`}>
                                        <button className='btn btn-edit'>Edit</button></Link>
                                    <button className='btn btn-delete' onClick={() => deletePlant(plant.plantID)}>Delete</button>
                                    <Link to={`/view/${plant.plantID}`}>
                                        <button className='btn btn-view'>View</button></Link>
                        </td>
                    </tr>
                  );
                })}
            </tbody>
        </Table>
        </Container>
   </div>
);
}
export default Plants;