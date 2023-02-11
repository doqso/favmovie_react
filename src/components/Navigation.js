import React, { Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function Navigation() {
  const { user } = useAuth();
  const navButton = useRef(null);
  const closeNavbar = () => {
    console.log(navButton.current.classList.contains("collapsed"));
    if (!navButton.current.classList.contains("collapsed"))
      navButton.current.click();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid p-0 justify-between">
        <Link className="navbar-brand" to="/genre/12?page=1">FavMovies</Link>
        <button ref={navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup" onClick={() => { closeNavbar() }}>
          <div className="navbar-nav">
            {user !== null ? <Fragment>
              <p className="m-0 nav-link me-4" style={{cursor: "default"}}>Bienvenido <span className="text-light">{user.username}</span></p>
              <NavLink className="nav-link" to="/genre?page=1">Generos</NavLink>
              <NavLink className="nav-link" to="/favorites?page=1">Favoritos</NavLink>
              <NavLink className="nav-link" to="/watchlist?page=1">Pendientes</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/">Acerca de</NavLink>
              <NavLink className="nav-link text-bg-danger" to="/logout">Cerrar sesión</NavLink>
            </Fragment>
              :
              <Fragment>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/">Acerca de</NavLink>
              </Fragment>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}