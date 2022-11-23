import React from "react";
import About from "./components/About";
import ContextProvider from "./context/ContextProvider";

export default function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        <h1>This is app</h1>
        <About />
      </ContextProvider>
    </React.Fragment>
  );
}
