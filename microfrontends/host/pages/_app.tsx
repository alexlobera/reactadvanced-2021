import { UserProvider } from "user-provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider username="Alejandro">
      <Component {...pageProps} />
    </UserProvider>
  );
}
