import React from "react";
import ReactDOM from "react-dom";
import { MicroFrontendRoot } from "./components/MicroFrontendRoot";
import { ReactiveMap, ReactiveMapProvider } from "reactive-map";

// 🔥 this code is is not production ready

// 👉 We added a reactiveMap argument
interface MountOptions {
  reactiveMap: ReactiveMap;
}

export function mount(el: HTMLElement, { reactiveMap }: MountOptions) {
  if (el)
    ReactDOM.render(
      <ReactiveMapProvider reactiveMap={reactiveMap}>
        <MicroFrontendRoot />
      </ReactiveMapProvider>,
      el
    );

  return {
    unmount: () => {
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-profile-dev");
  if (el) {
    mount(el, { reactiveMap: new ReactiveMap() });
  }
}
