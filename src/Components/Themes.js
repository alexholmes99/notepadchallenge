import { ThemeProvider } from "styled-components";

const theme = {
  colour: {
    errorRed: "#e33d3d",
    pageBG: "#f5f4f2",
  },
  font: {
    notePad: '"Sue Ellen Francisco", cursive',
  },
  fontSize: {
    button: "24px",
    error: "18px",
    input: "35px",
  },
  button: {
    noBorder: "none",
    mainOpacity: 0.8,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
