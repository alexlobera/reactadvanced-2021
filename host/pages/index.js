import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home page</h1>
      <Link shallow href="/chat">
        chat
      </Link>
    </>
  );
};

export const getInitialProps = async (ctx) => {
  return {};
};

export default Home;
