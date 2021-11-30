import React, { useState } from "react";
import "./App.css";
import CitySearch from "./Components/CitySearch";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cp2 from "./Components/cp2";
import Cp1 from "./Components/cp1";
import Navbar from "./Components/navbar.jsx/Navbar";
import "tachyons";
import Weather from "./Components/wheather/weather";
function App(){

  const [cityid,setCityId]=useState("")

  const mainfunction=(cid)=>{
    console.log(cid);
    setCityId(cid);
  }

  return (
    <>
      <Router>
        <h1>ji</h1>
        <Routes>
          <Route path='/' element={<CitySearch mfunct={mainfunction} />} />
        <Route path="/weather" element={<Weather cityid={cityid}/>}/>
        </Routes>
      </Router>
    </>
  );


}



export default App;