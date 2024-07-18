import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Help from './Help';

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element=<Home /> />
        <Route path="Aboutus" exact element=<Aboutus/> />
        <Route path="Help" exact element=<Help/> />
        </Routes>
    </div>
  )
} 

export default App;