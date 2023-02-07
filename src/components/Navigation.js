import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
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
                <div ref={navbar} className="collapse navbar-collapse" id="navbarNavAltMarkup" onClick={()=>{closeNavbar()}}>
                    <div  className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Principal</NavLink>
                        <NavLink className="nav-link" to="/genre?page=1">Generos</NavLink>
                        <NavLink className="nav-link" to="/favorites?page=1">Favoritos</NavLink>
                        <NavLink className="nav-link" to="/watchlist?page=1">Pendientes</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}