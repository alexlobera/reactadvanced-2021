import React from "react";
import ReactDOM from "react-dom";
import { MicroFrontendRoot } from "./components/MicroFrontendRoot";
// import { UserProvider } from "user-provider";

// 👉 We don't `export { MicroFrontendRoot }` anymore
interface MountOptions {}

// 👉 We export a function that creates a new root
export function mount(el: HTMLElement, {}: MountOptions = {}) {
  if (el) ReactDOM.render(<MicroFrontendRoot />, el);

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
