import React, { useState } from "react";
import { useShareValue, useSharedValue } from "reactive-map";
import { Input } from "./Input";
import { Button } from "./Button";

export function App() {
  const shareUsername = useShareValue("username");
  const [username, setUsername] = useState("");

  return (
    <>
      <h2>User profile</h2>
      <form
        style={{ display: "inline" }}
        onSubmit={(e) => {
          e.preventDefault();
          shareUsername(username);
        }}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button />
      </form>
    </>
  );
}
