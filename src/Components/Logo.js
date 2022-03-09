import styled from "styled-components";

function Logo() {
  return <StyledLogo>Notes</StyledLogo>;
}

const StyledLogo = styled.h1`
  font-family: "Sue Ellen Francisco", cursive;
  text-decoration: underline;
  font-size: 50px;
  text-align: center;
  margin-bottom: none;
`;

export default Logo;
