import React from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import Notes from "./Components/Notes";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Routes, Route } from "react-router-dom";
import UpdateNote from "./Components/UpdateNote";
function App() {
  return (
    <Provider store={store}>
      <Logo />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/notes/new" element={<Form />} />
        <Route path="/notes/update/:id" element={<UpdateNote />} />
      </Routes>
    </Provider>
  );
}

export default App;
