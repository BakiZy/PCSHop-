import React, { Fragment } from "react";
import Hardware from "./components/Hardware/Hardware";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hardware />
      </main>
    </Fragment>
  );
}

export default App;
