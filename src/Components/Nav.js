import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Themes";

const Nav = (props) => {
  return (
    <Theme>
      <StyledNav
        to={props.link}
        onClick={props.onClick}
        cssoptions={props.cssOptions}
      >
        {props.children}
      </StyledNav>
    </Theme>
  );
};

const StyledNav = styled(NavLink)`
  font-family: ${(props) => props.theme.font.notePad};
  text-decoration: underline;
  color: black;
`;
export default Nav;
