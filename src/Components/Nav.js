import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = (props) => {
  return (
    <StyledNav to={props.link} cssoptions={props.cssOptions}>
      {props.children}
    </StyledNav>
  );
};

const StyledNav = styled(NavLink)`
  font-family: "Sue Ellen Francisco", cursive;
  text-decoration: underline;
  color: black;
`;
export default Nav;
