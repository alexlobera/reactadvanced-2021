import { ReactiveMapProvider, ReactiveMap } from "reactive-map";
import { Nav } from "../components/Nav";

const reactiveMap = new ReactiveMap();

export default function MyApp({ Component, pageProps }) {
  return (
    <ReactiveMapProvider reactiveMap={reactiveMap}>
      <Nav />
      <Component {...pageProps} />
    </ReactiveMapProvider>
  );
}
