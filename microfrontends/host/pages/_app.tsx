import { UserProvider } from "user-provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider username="alexlbr">
      <Component {...pageProps} />
    </UserProvider>
  );
}
