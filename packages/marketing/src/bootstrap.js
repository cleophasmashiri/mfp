import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const container = document.querySelector("#_marketing-container-el");
  if (container) {
    mount(container);
  }
}

export { mount };
