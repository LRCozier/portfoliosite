import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <>
    <Header />
    <About/>
    <Contact />
    <Footer />
    </>
  )
}

export default App
