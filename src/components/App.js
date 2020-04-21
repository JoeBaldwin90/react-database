import React, { Fragment } from "react";
import "../css/App.scss";
import GlobalStyles from "../theme/global-styles";
import Main from "./Main";
import Header from "./Header";

const App = () => (
  <Fragment>
    <GlobalStyles dark />
    <Header />
    <Main />
  </Fragment>
);

export default App;
