import styled from "styled-components";
import { ReactComponent as LogoImg } from "./logo.svg";

function Logo() {
  return <StyledLogo>Notes</StyledLogo>;
}
const StyledLogo = styled.h1`
  font-family: "Sue Ellen Francisco", cursive;
  float: left;
  text-decoration: underline;
  margin-left: 2%;
  font-size: 50px;
`;

export default Logo;
