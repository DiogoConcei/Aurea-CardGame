import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Baralho from "./Components/Baralho";

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
