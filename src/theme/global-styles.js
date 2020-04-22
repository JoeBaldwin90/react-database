import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
    color: ${(props) => (props.dark ? "mediumseagreen" : "black")};
    background-color: ${(props) => (props.dark ? "#222222" : "#FFFFFF")};
  }
`;

export default GlobalStyles;
