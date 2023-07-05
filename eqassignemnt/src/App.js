import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./scrren/Registration";
import Login from "./scrren/Login";
// import Navigation from './scrren/Navigation';
import Welcome from "./scrren/Welcome";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="background_Screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Welcome />} />
          <Route path="/" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
