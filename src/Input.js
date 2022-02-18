import React from "react"

function Input(props){

  return(
      <input 
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
  )
}

export default Input;
