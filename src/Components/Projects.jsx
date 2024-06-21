import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { homeprojectAPI } from './services/allAPI'

function Projects() {
    const [homeProject,setHomeProject]=useState([]);
    const [searchKey,setSearchKey]=useState("");
   
    const getHomeProject =async()=>{
        const result=await homeprojectAPI(searchKey);
        console.log(result);
        setHomeProject(result.data);
        console.log(setHomeProject);
    }
    useEffect(()=>{
        getHomeProject();
       },[searchKey])
      
  return (
   <>
   <div className='mt-5 ms-5'>
    <p>MY WORK</p>
    
    <div  className= 'd-flex justify-content-center flex-column align-items-center mt-5'>
    <h2>
    All Projects
   </h2>
        <div className='mt-5 w-25 d-flex'>
    <input type='text ' className='form-control' onChange={(e)=>setSearchKey(e.target.value)} placeholder='Search project using technology'></input>
    <i className='fa-solid fa-magnifying-glass fa-rotate-90' style={{marginLeft:"-45px"}}></i>
    </div>
   </div>
    </div>
   
    <Row className='m-5'>
        {  homeProject?.length>0?
           homeProject.map((item)=>(
    <Col className='d-flex justify-content-center flex-column align-items-center mt-5'sm={12} lg={4} md={4}>
     
       
     
            <ProjectCard project={item}/>
            </Col>
        ))
        :<p>No projects to load</p>
     }
       
        
        </Row>
      

    
   
  
   
   </>
  )
}

export default Projects