import React from "react";
import Head from "next/head";
import { HostMicroFrontend } from "../components/HostMicroFrontend";
import Link from "next/link";

const Reception = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>Host page</h1>
      <Link shallow href="/">
        home
      </Link>
      <HostMicroFrontend
        url="http://localhost:8888/remoteEntry.js"
        name="chat"
      />
    </>
  );
};

export const getInitialProps = async (ctx) => {
  return {};
};

export default Reception;
