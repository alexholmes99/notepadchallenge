import React from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import Notes from "./Components/Notes";
import Nav from "./Components/Nav";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Logo />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/notes/new" element={<Form />} />
      </Routes>
    </Provider>
  );
}

export default App;
