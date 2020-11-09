import "../styles/_app.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
	  font-family: Kanit, Arial, Helvetica, sans-serif
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#34AAC4",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
