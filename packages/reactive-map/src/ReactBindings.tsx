// 🔥 this code is not production ready
// 🔥 the APIs are a simplification of our production APIs

import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactiveMap } from "./ReactiveMap";

const ReactiveMapContext = createContext<ReactiveMap | undefined>(undefined);

export function ReactiveMapProvider({ children, reactiveMap }) {
  return (
    <ReactiveMapContext.Provider value={reactiveMap}>
      {children}
    </ReactiveMapContext.Provider>
  );
}

export function useReactiveMap() {
  const reactiveMap = useContext(ReactiveMapContext);
  if (!reactiveMap) {
    throw new Error("ReactiveMapProvider is not an ancestor of this component");
  }

  return reactiveMap;
}

export function useSharedValue(key: string) {
  const reactiveMap = useReactiveMap();

  const reactiveValue = reactiveMap.get(key);
  const [value, setValue] = useState(reactiveValue());

  useEffect(() => reactiveValue.listen(setValue), [reactiveValue]);

  return value;
}

export function useShareValue(key: string) {
  return useReactiveMap().get(key);
}
