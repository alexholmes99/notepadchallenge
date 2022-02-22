import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <StyledButton type={props.type} value={props.value}>
      {props.content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  opacity: 0.8;
  color: #e33d3d;
  font-size: 24px;
  width: 100%;
  font-family: "Sue Ellen Francisco", cursive;
`;

export default Button;
