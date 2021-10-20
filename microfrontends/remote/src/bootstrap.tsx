import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ReactiveMap, ReactiveMapProvider } from "reactive-map";

const RootMicroFrontend = ({ children }) => children;

// 🔥 this code is is not production ready

// 👉 We added a reactiveMap argument
interface MountOptions {
  reactiveMap: ReactiveMap;
}

export function mount(el: HTMLElement, { reactiveMap }: MountOptions) {
  if (el)
    ReactDOM.render(
      <RootMicroFrontend>
        <ReactiveMapProvider reactiveMap={reactiveMap}>
          <App />
        </ReactiveMapProvider>
      </RootMicroFrontend>,
      el
    );

  return {
    unmount: () => {
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-chat-dev");
  if (el) {
    mount(el, { reactiveMap: new ReactiveMap() });
  }
}
