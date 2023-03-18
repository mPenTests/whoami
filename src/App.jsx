import React from 'react';
import About from './components/About';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </>
  )
}

export const scroll = (event) => {
  document.getElementById(event.target.classList[1]).scrollIntoView({ behavior: 'smooth' });
}

export default App