import React, { useState } from "react";
import { useUsername } from "user-provider";

export function MicroFrontendRoot() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋", sentAt: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const currentUsername = useUsername();

  return (
    <>
      <h1>{currentUsername}'s chat</h1>
      {messages.map((message) => (
        <p key={message.sentAt.getTime()}>{message.text}</p>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, { text: newMessage, sentAt: new Date() }]);
          setNewMessage("");
        }}
      >
        <input
          type="text"
          name="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
