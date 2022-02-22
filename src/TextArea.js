import React from "react";
import styled from "styled-components";

function TextArea(props) {
  return (
    <StyledText
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}

const StyledText = styled.textarea`
  font-size: 25px;
  font-family: "Noto Sans", sans-serif;
  box-shadow: 1px 2px;
`;
export default TextArea;
