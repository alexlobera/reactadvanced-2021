import React from "react";
import { useDynamicScript } from "./useDynamicScript";

const Loader = () => <>...</>;

export function MountMicroFrontend({ url, name }) {
  const { ready } = useDynamicScript({ url });

  if (!ready) return <Loader />;

  const Component = React.lazy(() => loadModule(name));

  return (
    <React.Suspense fallback={<Loader />}>
      <Component />
    </React.Suspense>
  );
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
