import { Bar, Baz } from "company-components";
import { add } from "company-lib";
import React from "react";
import "./App.css";

import logo from "./logo.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <section>
          <h1>Uses `company-components`</h1>
          <Bar />
          <Baz />
        </section>

        <section>
          <h1>Uses `company-lib`</h1>
          <h2>Output is {add(2, 2)}</h2>
        </section>
      </div>
    </div>
  );
};

export default App;
