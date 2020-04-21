import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className=''>
      <ul className=''>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/delete-product'>
            Delete
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/create-product'>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/edit-product'>
            Edit
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
