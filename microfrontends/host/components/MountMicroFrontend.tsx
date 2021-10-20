import React, { useState, useRef, useEffect } from "react";
import { useDynamicScript } from "./useDynamicScript";
import { useReactiveMap } from "reactive-map";
// 🔥 this code is is not production ready, no error handling, no perf optimizations, etc

const Loader = () => <>...</>;

function CreateRoot({ mount }) {
  const ref = useRef();
  const reactiveMap = useReactiveMap();

  useEffect(() => {
    const { unmount } = mount(ref.current, { reactiveMap });

    return unmount;
  }, [ref.current, reactiveMap]);

  return <div ref={ref} />;
}

export function MountMicroFrontend({ url, name }) {
  const [mount, setMount] = useState();
  const { ready } = useDynamicScript({ url });

  useEffect(() => {
    if (ready) {
      loadModule(name).then(({ mount: remoteMount }) => {
        setMount(() => remoteMount);
      });
    }
  }, [url, ready]);

  return mount ? <CreateRoot mount={mount} /> : <Loader />;
}

async function loadModule(scope, module = "./Index") {
  const container = (window as Record<string, any>)?.[scope];
  if (!container?.init || !container?.get) return null;

  await __webpack_init_sharing__("default");
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  const Module = factory();
  return Module;
}

declare const __webpack_init_sharing__: (arg0: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: any };
