import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./components/About";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SingleMovie from "./components/SingleMovie";
import { useAuth } from "./components/useAuth";
import Watchlist from "./components/WatchList";
import "./css/main.css";


function ProtectedRoute({ children }) {
  const { user} = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logout"} element={<Logout />} />
        {/* Protected routes */}
        <Route path={"/genre/:id?"} element={<ProtectedRoute><Main /></ProtectedRoute>} />
        <Route path={"/movie/:id"} element={<ProtectedRoute><SingleMovie /></ProtectedRoute>} />
        <Route path={"/favorites"} element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        <Route path={"/watchlist"} element={<ProtectedRoute><Watchlist /></ProtectedRoute>} />
        <Route path={"*"} element={<h1 className="position-absolute 
        bottom-50 start-50 translate-middle">404 Not Found</h1>} />
      </Routes>
    </React.Fragment>
  )
};

export default App;
