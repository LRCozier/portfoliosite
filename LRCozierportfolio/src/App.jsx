import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './pages/home';
import About from './pages/about';
import ProjectsDisplay from './pages/projects';
import Contact from './pages/contact';

function App() {

  return (
    <div className='App'>
    <Header />
    <Home />
    <About/>
    <ProjectsDisplay/>
    <Contact />
    <Footer />
    </div>
  )
}

export default App
