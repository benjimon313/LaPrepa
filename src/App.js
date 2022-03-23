import React from "react";

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./Components/PagesOpen/Inicio";
import Guia from "./Components/PagesOpen/Guia";
import Carrera from "./Components/PagesOpen/Carrera";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Inicio/>} />
          <Route path="/guia" element={<Guia/>} />
          <Route path="/carrera" element={<Carrera/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
