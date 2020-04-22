import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  max-width: 600px;
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em 10vw;
`;

const LinkWrapper = styled.li`
  padding: 1em 0;
`;

const Header = () => (
  <header>
    <Navigation>
      <ListWrapper>
        <LinkWrapper>
          <NavLink
            exact
            to='/'
            activeClassName='selected'
            activeStyle={{
              color: "#4CAF50",
              borderBottom: "solid 2px #4CAF50",
            }}
          >
            Home
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            exact
            to='/delete-product'
            activeClassName='selected'
            activeStyle={{
              color: "#4CAF50",
              borderBottom: "solid 2px #4CAF50",
            }}
          >
            Delete
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            exact
            to='/create-product'
            activeClassName='selected'
            activeStyle={{
              color: "#4CAF50",
              borderBottom: "solid 2px #4CAF50",
            }}
          >
            Create
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            exact
            to='/edit-product'
            activeClassName='selected'
            activeStyle={{
              color: "#4CAF50",
              borderBottom: "solid 2px #4CAF50",
            }}
          >
            Edit
          </NavLink>
        </LinkWrapper>
      </ListWrapper>
    </Navigation>
  </header>
);

export default Header;
