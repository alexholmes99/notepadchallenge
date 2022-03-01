import React from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import Notes from "./Components/Notes";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppDiv>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <Form />
        <Notes />
      </AppDiv>
    </Provider>
  );
}

const LogoDiv = styled.div`
  margin-bottom: none;
`;

const AppDiv = styled.div`
  text-align: center;
`;

export default App;
