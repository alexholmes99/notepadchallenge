import React, {useState} from "react"
import './App.css';
import Input from "./Input";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBlur = (e) => {
    if(formData.name == ""){
      alert("Field is required")
    }
  }

  return (
    <div className="App">
      <Input 
        type="text" 
        name="name" 
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange} 
        onBlur={handleBlur}
      />

    </div>
  );


}

export default App;
