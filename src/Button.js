import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <StyledButton type={props.type} value={props.value} {...props}>
      {props.content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: ${(props) => props.cssOptions.border};
  opacity: ${(props) => props.cssOptions.opacity};
  color: ${(props) => props.cssOptions.color};
  font-size: ${(props) => props.cssOptions.fontsize};
  width: 100%;
  font-family: "Sue Ellen Francisco", cursive;
`;
export default Button;
