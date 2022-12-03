import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="MainBody">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/home" element={<Home />} />
          {/* <Route exact path="/keyboard/product/:productId" element={<Product />} /> */}
          <Route  path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
