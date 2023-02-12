import React, { Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../custom_hooks/useAuth";

export default function Navigation() {
  const { user } = useAuth();
  const navButton = useRef(null);
  const closeNavbar = () => {
    if (!navButton.current.classList.contains("collapsed"))
      navButton.current.click();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid p-0 ">
        <Link to={"genre/12?page=1"} className="navbar-brand m-0 me-4">FavMovies</Link>
        <button ref={navButton} className="border-0 navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 w-100 justify-content-between" id="navbarNavAltMarkup" onClick={() => { closeNavbar() }}>
          <div className="navbar-nav">
            {user !== null ? <Fragment>
              <NavLink className="nav-link rounded-1" to="/genre?page=1">Generos</NavLink>
              <NavLink className="nav-link rounded-1" to="/favorites?page=1">Favoritos</NavLink>
              <NavLink className="nav-link rounded-1" to="/watchlist?page=1">Pendientes</NavLink>
              <NavLink className="nav-link rounded-1" aria-current="page" to="/">Acerca de</NavLink>
              <NavLink className="nav-link rounded-1 text-bg-danger" to="/logout">Cerrar sesión</NavLink>
            </Fragment>
              :
              <Fragment>
                <NavLink className="nav-link rounded-1" to="/login">Login</NavLink>
                <NavLink className="nav-link rounded-1" aria-current="page" to="/">Acerca de</NavLink>
              </Fragment>
            }
          </div>
          <div className="navbar-nav">

        {user !== null ?
          <p className="m-0 me-4 nav-link" style={{ cursor: "default" }}>
            Bienvenido <span className="text-danger">{user.username}
            </span></p>
          : null
        }
        </div>
        </div>

      </div>
    </nav>
  );
}