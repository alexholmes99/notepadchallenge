import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = (props) => {
  return <StyledNav to={props.link}>{props.children}</StyledNav>;
};

const StyledNav = styled(NavLink)`
  font-family: "Sue Ellen Francisco", cursive;
  text-decoration: underline;
  float: left;
  font-size: 32px;
  color: black;
`;
export default Nav;
