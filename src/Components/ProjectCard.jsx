import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import projectimg from'../images/projectimage.jpg';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from './services/baseurl'; 

function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Card style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img variant="top" src={`${BASE_URL}/uploads/${project?.projectImage}`} height={"200px"} width={"100px"}/>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
   
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col md={6} lg={6}>
            <img src={`${BASE_URL}/uploads/${project?.projectImage}`} width={"100%"} height ={"250px"}></img>
          </Col>
          <Col  md={6} lg={6}>
            <h4>{project.overview}</h4>
            <p>A react project for adding, editing projects</p>
            <p><span className='fw-bolder'>Technologies  </span>{project.language}</p>
          </Col>
        </Row>
        <div className='d-flex mt-3'>
        <a href={project.website} target="_blank" style={{color:"black",fontSize:"25px"}}>
            <i className='fa-solid fa-link ms-3'></i></a>
          <a href={project.github} target="_blank" style={{color:"black",fontSize:"25px"}}>
            <i className='fa-brands fa-github ms-3'></i>
          </a>
        </div>
        </Modal.Body>
      </Modal>
    
    </div>
  )
}

export default ProjectCard