import React, { useState } from "react";

import Header from "./Components/Header";
import Containerr from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Containerr />
    </>
  );
}

export default App;