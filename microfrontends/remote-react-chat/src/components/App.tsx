import React, { useState } from "react";
import { useSharedValue } from "reactive-map";

export function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUsername = useSharedValue("username");

  return (
    <>
      <h2>{currentUsername}'s React chat</h2>
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
