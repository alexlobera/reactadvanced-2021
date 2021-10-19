import React from "react";
import ReactDOM from "react-dom";
import { MicroFrontendRoot } from "./components/MicroFrontendRoot";
// import { UserProvider } from "user-provider";

interface MountOptions {
  username?: string;
}
export function mount(el, { username }: MountOptions = {}) {
  if (el) ReactDOM.render(<MicroFrontendRoot username={username} />, el);

  return {
    unmount: () => {
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-chat-dev");
  if (el) {
    mount(el, { username: "alexdev" });
  }
}
