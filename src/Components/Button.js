import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <StyledButton
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      cssOptions={props.cssOptions}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: ${(props) => props.cssOptions.border};
  opacity: ${(props) => props.cssOptions.opacity};
  color: ${(props) => props.cssOptions.color};
  font-size: ${(props) => props.cssOptions.fontsize};
  display: ${(props) => props.cssOptions.display};
  width: ${(props) => props.cssOptions.width};
  float: ${(props) => props.cssOptions.float};
  background: ${(props) => props.cssOptions.background};
  font-family: "Sue Ellen Francisco", cursive;
  text-decoration: ${(props) => props.cssOptions.textdecor};
`;
export default Button;
