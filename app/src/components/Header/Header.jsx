import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className='navbarExtends justify-content-centr align-items-centr navbar navbar-expand-lg bg-light'>
      <div className='navbarExtends__links justify-content-center container-fluid'>
        {/* <div className='navbar-nav'> */}
        <NavLink className='nav-link' aria-current='page' to='/'>
          Main
        </NavLink>
        <NavLink className='nav-link' to='/rgba'>
          RGB
        </NavLink>
        <Link className='nav-link' to='/color'>
          Color
        </Link>
      </div>

      {/* </div> */}
    </nav>
  );
};

export default Header;
