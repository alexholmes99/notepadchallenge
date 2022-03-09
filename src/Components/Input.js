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
        maxLength={props.maxLength}
        {...props}
      />
    </Theme>
  );
}

const StyledInput = styled.input`
  size: 10;
  margin-top: 2%;
  background-color: ${(props) => props.theme.colour.pageBG};
  opacity: 0.5;
  font-size: ${(props) => props.theme.fontSize.input};
  font-family: ${(props) => props.theme.font.notePad};
  border: none;
`;

export default Input;
