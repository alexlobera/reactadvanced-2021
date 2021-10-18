import React from "react";
import { useDynamicScript } from "./useDynamicScript";

async function loadModule(scope, module = "./Index") {
  await __webpack_init_sharing__("default");
  const container = window[scope];
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  return factory();
}

export function MountMicroFrontend({ url, name }) {
  const { ready } = useDynamicScript({ url });

  if (!ready) return "...";

  const Component = React.lazy(() => loadModule(name));

  return (
    <React.Suspense fallback={"..."}>
      <Component />
    </React.Suspense>
  );
}
