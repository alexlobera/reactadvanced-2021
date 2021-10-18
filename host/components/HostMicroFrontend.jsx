import React, { useRef, useEffect, useState } from "react";
import { useDynamicScript } from "./useDynamicScript";

async function loadModule(scope, module = "./Index") {
  await __webpack_init_sharing__("default");
  const container = window[scope];
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  return factory();
}

const Mount = React.memo(function MountMF({ mount }) {
  const ref = useRef();

  useEffect(() => {
    const { unmount } = mount(ref.current);

    return unmount;
  }, [ref.current]);

  return <div ref={ref} />;
});

export function HostMicroFrontend({ url, name }) {
  const [mount, setMount] = useState();
  const { ready } = useDynamicScript({ url });

  useEffect(() => {
    if (ready) {
      loadModule(name).then(({ mount: mountFunction }) => {
        setMount(() => mountFunction);
      });
    }
  }, [url, ready]);

  return mount ? <Mount mount={mount} /> : "...";
}
