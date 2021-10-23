import React from "react";
import Head from "next/head";
import { MountMicroFrontend } from "../components/MountMicroFrontend";

const Reception = () => {
  return (
    <>
      <Head>
        <title>Host & Chat</title>
      </Head>
      <MountMicroFrontend
        url="http://localhost:8888/remoteEntry.js"
        name="chat"
      />
    </>
  );
};

export default Reception;
