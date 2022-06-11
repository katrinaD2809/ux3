import React from 'react';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import "./Gardener.css";
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

function Gardener() {
    const [data, setData] = useState([]);
           

    const loadData = async () => {
        const response = await axios.get("http://localhost:8080/api/getgardener");
        setData(response.data);
    };

    useEffect(() => {
        loadData()
        }, []);
    

    const deleteGardener = (id) => {
        if (window.confirm("do you really want to delete this Gardener??")) {
            axios.delete(`http://localhost:8080/api/removegardener/${id}`);
            toast.success("Gardener has been deleted");
            setTimeout(() => loadData(), 300);
        }
    };
    return (
        <div>
        <h1 className="gardener-preview">Gardener</h1>
        <Container fluid>    
        <Link to="/addGardener"><Button variant="success" className="btn btn-gardener">Add a Gardener</Button></Link>
        <Table striped bordered hover size="sm">
            <thead>
                  <tr>
                      <th>ID</th>
                      <th><GrUserWorker />Name</th>
                      <th><GrUserWorker />Surname</th>
                      <th><TbWorld />Nationality</th>
                      <th>Birth Year</th>
                      <th>Death Year</th>                   
                   </tr>
            </thead>
                <tbody>
                    {data.map((gardener, index) => {
                        return (
                            <tr key={gardener.gardenerID}>
                                <th scope="row">{index + 1}</th>
                                <td>{gardener.name}</td>
                                <td>{gardener.surname}</td>
                                <td>{gardener.nationality}</td>
                                <td>{gardener.birthYear}</td>
                                <td>{gardener.deathYear}</td>
                                <td>
                                    <Link to={`/updategardener/${gardener.gardenerID}`}>
                                        <button className='btn btn-edit'>Edit</button></Link>
                                    <button className='btn btn-delete' onClick={() => deleteGardener(gardener.gardenerID)}>Delete</button>
                                    <Link to={`/ViewGardener/${gardener.gardenerID}`}>
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
export default Gardener;