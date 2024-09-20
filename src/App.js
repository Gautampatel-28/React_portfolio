import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
// import Testimonial from './components/Testimonial/Testimonial';
import Project from './components/Project/Project';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from './components/Contact/Contact';


function App() {
  return (
   <>
    <Header/> 
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification/>
      {/* <Testimonial/> */}
      <Project />
      <Contact/>
    </main>
   </>
  );
}

export default App;
