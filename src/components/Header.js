import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  margin: 1em auto;
`;

const Header = () => (
  <header>
    <Navigation>
      <ListWrapper>
        <li>
          <NavLink
            exact
            to='/'
            activeClassName='selected'
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/delete-product'
            activeClassName='selected'
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Delete
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/create-product'
            activeClassName='selected'
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/edit-product'
            activeClassName='selected'
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Edit
          </NavLink>
        </li>
      </ListWrapper>
    </Navigation>
  </header>
);

export default Header;
