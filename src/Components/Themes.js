import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    errorRed: "#e33d3d",
  },
  font: {
    notePad: '"Sue Ellen Francisco", cursive',
  },
  fontSize: {
    button: "24px",
    error: "18px",
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
