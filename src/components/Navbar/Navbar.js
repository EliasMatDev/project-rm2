import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";
import "../../App.css";

const Navbar = () => {
    return (
        <nav  className="navbar navbar-expand-lg bg-dark navbar-dark  mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand fs-3 ubuntu text-white">
                    Rick & Morty <span className="" id="pepapig">API</span>
                </Link>
                <style jsx>{`
        button[aria-expanded="false"] > .close {
            display: none;
        }
        button[aria-expanded="true"] > .open {
            display: none;
        }
        `}</style>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="fas fa-bars open text-dark"></span>
                    <span class="fas fa-times close text-dark"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav fs-5">
                        <NavLink to="/home" className="nav-link">
                            Inicio
                        </NavLink>
                        
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/personajes"
                        >
                            Personajes
                        </NavLink>

                        <NavLink to="/episodes" className="nav-link">
                            Episodios
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/location"
                        >
                            Localización
                        </NavLink>

                        <NavLink to="/nosotros" className="nav-link">
                            Acerca de Nosotros
                        </NavLink>

                        <NavLink to="/logout" className="nav-link">
                            Cerrar Sesión
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;