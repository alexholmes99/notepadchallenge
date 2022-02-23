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
  background-color: #f5f4f2;
  opacity: 0.5;
  font-size: 35px;
  font-family: "Sue Ellen Francisco", cursive;
  border: none;
`;
export default TextArea;
