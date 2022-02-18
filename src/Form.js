import React, {useState} from "react";
import Input from "./Input";
import TextArea from "./TextArea";

function Form(props){
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: ""
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = e => {
    if(e.target.value == ""){
      alert(e.target.name + " is required")
    }
  }

  return(
    <div>
      <Input 
        type="text" 
        name="name" 
        placeholder="Enter Your Name" 
        onChange={(e) => handleChange(e,"name")} 
        onBlur={handleBlur}
      />
      <Input
        type="date"
        name="date"
        placeholder=""
        value={formData.date}
        onChange={(e) => handleChange(e,"date")}
        onBlur={handleBlur}
      />
      <TextArea
        name="note"
        placeholder="Enter Note Here"
        value={formData.note}
        onChange={(e) => handleChange(e,"note")}
        onBlur={handleBlur}
      />
    </div>
  )

}

export default Form
