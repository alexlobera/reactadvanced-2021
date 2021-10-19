import React from "react";
import Head from "next/head";
import { MountMicroFrontend } from "../components/MountMicroFrontend";
import { useUsername } from "user-provider";

const Reception = () => {
  const currentUsername = useUsername();
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>Host page</h1>
      <MountMicroFrontend
        url="http://localhost:8888/remoteEntry.js"
        name="chat"
      />
    </>
  );
};

export default Reception;
