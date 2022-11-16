import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Components/detail";
import Mascotas from './Components/mascotas';
import NavBar from "./Components/navbar";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;