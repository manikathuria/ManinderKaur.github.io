import React  , {useEffect}from 'react';
import Particle from './Particles'
import './App.css'
import About from './About'
import Intro from './Intro'
import Contact from './Contact'


function App() {

  return (
    <div className="app">
     <Particle />
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
