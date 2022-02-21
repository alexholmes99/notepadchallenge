import React from "react";

function TextArea(props) {
  return (
    <textarea
      style={{ fontSize: "15px" }}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}

export default TextArea;
