import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./components/About";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import SingleMovie from "./components/SingleMovie";
import Watchlist from "./components/WatchList";
import "./css/main.css";

const App = () => {
  const [user, setUser] = React.useState(null)
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/login"} element={<Login setUser={setUser} />} />
        <Route path={"/genre/:id?"} element={<Main />} />
        <Route path={"/movie/:id"} element={<SingleMovie />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/watchlist"} element={<Watchlist />} />
        <Route path={"*"} element={<h1 className="position-absolute 
        bottom-50 start-50 translate-middle">404 Not Found</h1>} />
      </Routes>
    </React.Fragment>
  )
};

export default App;
