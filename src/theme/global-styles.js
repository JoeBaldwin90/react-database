import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300,400,500&display=swap'); // Import fonts
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
    color: ${(props) => (props.dark ? "mediumseagreen" : "black")};
    background-color: ${(props) => (props.dark ? "#222222" : "#FFFFFF")};
  }
`;

export default GlobalStyles;
