import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
  <ul>
    <li><NavLink className="navbar" exact to="/">Home</NavLink></li>
    <li><NavLink className="navbar" to="/movies">Movies</NavLink></li>
    <li><NavLink className="navbar" to="/directors">Directors</NavLink></li>
    <li><NavLink className="navbar" to="/actors">Actors</NavLink></li>
  </ul>
  )
}

export default NavBar;
