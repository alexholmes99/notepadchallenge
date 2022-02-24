import React from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <Form />
    </AppDiv>
  );
}

const LogoDiv = styled.div`
  margin-bottom: none;
`;

const AppDiv = styled.div`
  text-align: center;
`;

export default App;
