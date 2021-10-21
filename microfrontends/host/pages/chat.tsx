import React from "react";
import Head from "next/head";
import { MountMicroFrontend } from "../components/MountMicroFrontend";
import { useUsername } from "user-provider";

const Reception = () => {
  const currentUsername = useUsername();
  return (
    <>
      <Head>
        <title>Host & Chat</title>
      </Head>
      <MountMicroFrontend
        url="http://localhost:8887/remoteEntry.js"
        name="chat"
      />
    </>
  );
};

export default Reception;
