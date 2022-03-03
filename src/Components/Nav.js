import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = (props) => {
  return <StyledNav to={props.link}>{props.children}</StyledNav>;
};

const StyledNav = styled(NavLink)`
  float: left;
  font-family: "Sue Ellen Francisco", cursive;
  text-decoration: underline;
  font-size: 24px;
  position: relative;
  top: 32px;
  left: 50px;
  color: black;
`;
export default Nav;
