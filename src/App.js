import logo from './logo.svg';
import './App.css';
import { Carousel } from 'bootstrap';
import CarouselImages from './Components/CarouselImages';
import IntroPart from './Components/IntroPart';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Journey from './Components/Journey';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>


      <Route path='/project' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/interest' element={<Skills/>}/>
      <Route path='/education' element={<Journey/>}/>
     </Routes>
    
  </div>
  );
}

export default App;
