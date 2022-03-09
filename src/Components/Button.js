import React from "react";
import styled from "styled-components";
import Theme from "./Themes";

function Button(props) {
  return (
    <Theme>
      <StyledButton
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        cssOptions={props.cssOptions}
        {...props}
      >
        {props.children}
      </StyledButton>
    </Theme>
  );
}

const StyledButton = styled.button`
  border: ${(props) => props.theme.button.noBorder};
  opacity: ${(props) => props.theme.button.mainOpacity};
  color: ${(props) => props.theme.colour.errorRed};
  font-size: ${(props) => props.theme.fontSize.button};
  font-family: ${(props) => props.theme.font.notePad};
`;
export default Button;
