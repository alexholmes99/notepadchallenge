import React from "react";
import Form from "./Form";
import Logo from "./Logo";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Logo">
        <Logo />
      </div>
      <Form />
    </div>
  );
}

export default App;
