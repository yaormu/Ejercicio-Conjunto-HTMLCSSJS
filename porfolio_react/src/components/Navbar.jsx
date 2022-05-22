import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="brand">
        <h2>
          Ya<span>Dev</span>
        </h2>
      </div>
      <div class="menu">
        <NavLink activeClassName="active" to="/" className="nav-link">
          Información Principal
        </NavLink>
        <NavLink to="/experiencia" className="nav-link">
          Experencia Laboral
        </NavLink>
        <NavLink to="/personal" className="nav-link">
          Referencias Personales
        </NavLink>
        <NavLink to="/familiar" className="nav-link">
          Referencias Familiares
        </NavLink>
        <NavLink to="/estudios" className="nav-link">
          Estudios Realizados
        </NavLink>
        <NavLink to="/portafolio" className="nav-link">
          Portafolio Códigos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
