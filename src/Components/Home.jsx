import React from 'react'
import IntroPart from './IntroPart'
import { Carousel } from 'bootstrap';
import CarouselImages from './CarouselImages'
import Projects from './Projects'
import About from './About';
import Skills from './Skills';
import Journey from './Journey';

function Home() {
  return (
    <div className='d-flex text-align-center justify-content-center ' >
    <div >
     <IntroPart/>
    </div>
    <div className='ms-2'>
      
   
    <CarouselImages/>
  <Projects/>
  <About/>
  <Skills/>
  <Journey/>
    </div>
   </div>

  )
}

export default Home