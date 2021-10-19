import React, { useState } from "react";
import { useShareValue, useSharedValue } from "reactive-map";

export function MicroFrontendRoot() {
  const shareUsername = useShareValue("username");
  const [username, setUsername] = useState(useSharedValue("username"));

  return (
    <form
      style={{ display: "inline" }}
      onSubmit={(e) => {
        e.preventDefault();
        shareUsername(username);
      }}
    >
      <input
        type="text"
        name="username"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
