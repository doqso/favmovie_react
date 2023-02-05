import React from "react";
import { Routes, Route } from "react-router-dom"
import About from "./components/About";
import Login from "./components/Login";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SingleMovie from "./components/SingleMovie";
import "./css/main.css";

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/genre/:id?"} element={<Main />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/movie/:id"} element={<SingleMovie />} />
        <Route path={"*"} element={<h1 className="position-absolute 
        bottom-50 end-50">Not Found</h1>} />
      </Routes>
    </React.Fragment>
  )
};

export default App;
