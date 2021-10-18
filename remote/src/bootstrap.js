import React from "react";
import ReactDOM from "react-dom";
import { MicroFrontend } from "./components/MicroFrontend";

export function mount(el) {
  if (el) ReactDOM.render(<MicroFrontend />, el);

  return {
    unmount: () => {
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-chat-dev");
  if (el) {
    mount(el);
  }
}
