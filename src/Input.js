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
  background-color: ;
  font-size: 25px;
  font-family: "Noto Sans", sans-serif;
`;

export default Input;
