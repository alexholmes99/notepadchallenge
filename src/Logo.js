import styled from "styled-components";
import { ReactComponent as LogoImg } from "./logo.svg";

function Logo() {
  return (
    <LogoDiv>
      <LogoImg />
    </LogoDiv>
  );
}
const LogoDiv = styled.div`
  width: 40px;
  float: center;
  padding: none;
  margin-left: 2%;
  margin-top: 2%;
`;

export default Logo;
