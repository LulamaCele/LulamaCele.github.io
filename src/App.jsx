import React from 'react';

import './App.css'
//import nav
import { Nav } from './components/Nav';
//imort skills
import {Skills} from './components/Skills';
//import projects
import {Projects} from './components/Projects';
//import contact
import { Contact } from './components/Contact';
//import hero
import { Hero } from './components/Hero';


function App() {

  return (
    <div>
    <Nav />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export default App
