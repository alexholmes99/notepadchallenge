import React from "react";
import styled from "styled-components";
import Theme from "./Themes";

function Input(props) {
  return (
    <Theme>
      <StyledInput
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Theme>
  );
}

const StyledInput = styled.input`
  margin-top: 2%;
  background-color: ${(props) => props.theme.colour.pageBG};
  opacity: 0.5;
  font-size: ${(props) => props.theme.fontSize.input};
  font-family: "Sue Ellen Francisco", cursive;
  border: none;
`;

export default Input;
