import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SingleMovie from "./components/SingleMovie";
import "./css/main.css";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
