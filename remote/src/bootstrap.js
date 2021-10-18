import React from "react";
import ReactDOM from "react-dom";
import { MicroFrontend } from "./components/MicroFrontend";

export default MicroFrontend;

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-chat-dev");

  if (el) ReactDOM.render(<MicroFrontend />, el);
}
