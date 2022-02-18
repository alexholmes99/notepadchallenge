import React, {useState} from "react"
import './App.css';
import Input from "./Input";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  })

  const handleChange = (e, key) => {
    const newData={
      ...formData,
      [key]: e.target.value
    }
    setFormData(newData)
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
        onChange={(e) => handleChange(e, "name")} 
        onBlur={handleBlur}
      />

    </div>
  );


}

export default App;
