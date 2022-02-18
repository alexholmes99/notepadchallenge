import React, {useState} from "react";
import Input from "./Input";
import TextArea from "./TextArea";

function Form(props){
  const [formData, setFormData] = useState({
    name: "",
    note: ""
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = e => {
    if(formData.name == ""){
      alert(e.target.name + " is required")
    }
  }
return(
  <div>
    <Input 
    type="text" 
    name="name" 
    placeholder="Enter Your Name" 
    onChange={handleChange} 
    onBlur={handleBlur}
    />
  <TextArea
    name="note"
    placeholder="Enter Note Here"
    value={formData.note}
    onChange={handleChange}
    onBlur={handleBlur}
  />
  </div>
)

}

export default Form
