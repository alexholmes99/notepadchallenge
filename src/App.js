import React, {useState} from "react"
import './App.css';
import Input from "./Input";
import TextArea from "./TextArea";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    note: ""
  })

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    })
  }

  const handleBlur = e => {
    if(e.target.value == ""){
      alert(e.target.name + " is required")
    }
  }

  return (
    <div className="App">
      <Input 
        type="text" 
        name="name" 
        placeholder="Enter Your Name" 
        onChange={(e) => handleChange(e, "name")} 
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
  );


}

export default App;
