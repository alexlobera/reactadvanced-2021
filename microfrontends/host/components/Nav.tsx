import React from "react";
import Link from "next/link";
import { MountMicroFrontend } from "./MountMicroFrontend";

export function Nav() {
  return (
    <nav>
      <Link shallow href="/">
        home
      </Link>{" "}
      |{" "}
      <Link shallow href="/chat">
        chat
      </Link>{" "}
      <MountMicroFrontend
        url="http://localhost:8889/remoteEntry.js"
        name="profile"
      />
    </nav>
  );
}
