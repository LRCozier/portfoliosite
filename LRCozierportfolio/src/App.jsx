import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <div className='App'>
    <div className="app-wrapper">
      <Main/>
      <About/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
