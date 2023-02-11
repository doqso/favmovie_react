import React, { Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function Navigation() {
  const { user } = useAuth();
  const navbar = useRef(null);
  const closeNavbar = () => {
    navbar.current.classList.remove("show");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid p-0">
        <Link className="navbar-brand" to="/genre/12?page=1">FavMovies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={navbar} className="collapse navbar-collapse" id="navbarNavAltMarkup" onClick={() => { closeNavbar() }}>
          <div className="navbar-nav">
            {user !== null ? <Fragment>
              <NavLink className="nav-link" to="/genre?page=1">Generos</NavLink>
              <NavLink className="nav-link" to="/favorites?page=1">Favoritos</NavLink>
              <NavLink className="nav-link" to="/watchlist?page=1">Pendientes</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/">Acerca de</NavLink>
              <NavLink className="nav-link text-bg-danger" to="/logout">Log out</NavLink>
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