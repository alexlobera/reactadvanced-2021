import React from "react";

export function Input({ value, onChange }) {
  return (
    <input
      type="text"
      name="username"
      value={value || ""}
      // onChange={(e) => setUsername(e.target.value)}
      onChange={onChange}
    />
  );
}
