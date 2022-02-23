import React from "react";
import styled from "styled-components";

function Input(props) {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}
const StyledInput = styled.input`
  margin-top: 2%;
  background-color: #f5f4f2;
  opacity: 0.5;
  font-size: 35px;
  font-family: "Sue Ellen Francisco", cursive;
  border: none;
`;

export default Input;
