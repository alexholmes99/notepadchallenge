import React from "react";
import styled from "styled-components";
import Theme from "./Themes";

function TextArea(props) {
  return (
    <Theme>
      <StyledText
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
      />
    </Theme>
  );
}

const StyledText = styled.textarea`
  background-color: ${(props) => props.theme.colour.pageBG};
  opacity: 0.5;
  font-size: ${(props) => props.theme.fontSize.input};
  font-family: ${(props) => props.theme.font.notePad};
  border: none;
`;

export default TextArea;
