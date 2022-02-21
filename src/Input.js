import React from "react";

function Input(props) {
  return (
    <input
      style={{ fontSize: "15px" }}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}

export default Input;
