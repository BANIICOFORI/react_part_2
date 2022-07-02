import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import AppFooter from './AppFooter';
import Hero from './Hero';
import About from './About';
  


function App() {
  return (
    <div className="App">
       
      {/* <div  style={{backgroundColor:"red"}}><h1>POLAS</h1></div> */}
      <Navbar />
      
      
      <Main />
      <AppFooter />
     
    </div>
  );
}

export default App;
