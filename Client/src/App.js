import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index.js";
import Baralho from "./Pages/Baralho/index.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Baralhos" element={<Baralho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
