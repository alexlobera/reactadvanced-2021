import React, { useState, useRef, useEffect } from "react";
import { useDynamicScript } from "./useDynamicScript";

const Loader = () => <>...</>;

function CreateRoot({ mount, username }) {
  const ref = useRef();

  useEffect(() => {
    const { unmount } = mount(ref.current, { username });

    return unmount;
  }, [ref.current]);

  return <div ref={ref} />;
}

export function MountMicroFrontend({ url, name, username }) {
  const [mount, setMount] = useState();
  const { ready } = useDynamicScript({ url });

  useEffect(() => {
    if (ready) {
      loadModule(name).then(({ mount: mountFunction }) => {
        setMount(() => mountFunction);
      });
    }
  }, [url, ready]);

  return mount ? <CreateRoot mount={mount} username={username} /> : <Loader />;
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
