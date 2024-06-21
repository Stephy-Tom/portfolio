import React from 'react'
import './IntroPart.css'
import Container from 'react-bootstrap/Container';
import github from '../images/github.png'
import linkedIn from '../images/LinkedIn_icon.svg.png'
import instagram from '../images/instagram-icon-1024x1024-8qt57uwd.png'
import gmail from '../images/imgbin-gmail-email-computer-icons-google-logo-gmail-BpfqUDAf46njwrCswTz6SnjF5.jpg'
import { Link } from 'react-router-dom';

function IntroPart() {
  return (
  <><div className='sticky '>
  <nav className='navbar sticky'>
    <div className='container '>
 <div className=' mt-5 justify-content-center '>

   <div className=' justify-content-center text-center'>
    <p>#programmer_life</p>
    <p>#hello_world</p>
    <p>#coding</p>
    </div>
   
    <div className='ms-2'>
    <h2 >Stephy Mathew</h2>
    <p ><i class="fa-solid fa-envelope me-1"></i>stephymathew610@gmail.com</p>
   </div>
 </div > 

    <div  className=' justify-content-center text-center '>
      <ul style={{textAlign:"center",listStyle:"none"}}>
      <Link style={{textDecoration:"none"}} to='/project'>
        <li style={{marginBottom:"15px"}}><a className='links'  href="">Project</a></li>
        </Link>
        <Link style={{textDecoration:"none"}} smooth to='/about'>
        <li style={{marginBottom:"15px"}}><a className="links"href="">About</a></li>
        </Link>
        <Link style={{textDecoration:"none"}} to='/interest'>
        <li style={{marginBottom:"15px"}}><a className="links"  href="">Interest</a></li>
        
        
        </Link>
       
        <li style={{marginBottom:"15px"}} className='sidebar-nav-items'>
        <Link style={{textDecoration:"none"}} to='/education' className='links'>
          <a className="links"  href="">Education</a>
          </Link>
          </li>
        
        <li style={{marginBottom:"15px"}}><a  href="https://github.com/Stephy-Tom"><img className='media-icon' height="28px"src={github} alt="" /></a></li>
        <li style={{marginBottom:"15px"}}><a href=""><img  className='media-icon' height="28px"src={linkedIn} alt="" /></a></li>
        <li style={{marginBottom:"15px"}}><a  href=""><img  className='media-icon' height="28px"src={instagram} alt="" /></a></li>
        <li style={{marginBottom:"15px"}}><a  href="stephymathew610@gmail.com"><img  className='media-icon' height="28px"src={gmail} alt="" /></a></li>
      </ul>
    </div>
    </div>
    </nav>
    </div>
    </>
  )
}

export default IntroPart