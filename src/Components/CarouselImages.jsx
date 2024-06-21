import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImageOne from '../images/hello.avif'
import ImageTwo from '../images/imagetwo.jpg'
import './CarouselImages.css'
import { CCarousel } from '@coreui/react'
import { CCarouselItem ,CImage,CCarouselCaption} from '@coreui/react'
import { Link } from 'react-router-dom';


function CarouselImages() {
  return (

    <>
    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        
        <div class="carousel-inner  carousel-fade ">
           
          <div class="carousel-item active carousel-image bg-img1">
             
           {/* <img src={ImageOne} class="d-block w-100" alt="..."/> */}
            <div class="carousel-head ">
              <div class="carousl-top"></div>
              <h3 class="carousel-bottom">
               I'M STEPHY</h3>
               <a className=''href='https://drive.google.com/drive/folders/0ADqbXEhUYuxCUk9PVA'>
               <button className='btn rounded cv' >VIEW CV<i class="fa-solid fa-down"></i></button>
               </a>
            </div>
          </div>
          <div class="carousel-item carousel-image bg-img2">
           {/* <img src={ImageTwo} class="d-block w-100" alt="..."/>  */}
            <div class="carousel-head">
              <div class="carousl-top">I LOVE BUILDING <br></br>THINGS !! </div>
              <Link to='/project'>
             <button className='btn cv'>PROJECTS</button>
             </Link>
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  </>
  
  )
}

export default CarouselImages