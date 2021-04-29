import React, { useState } from "react";
import { MessageItem } from "./MessageItem";

export function Sender() {
  const [sender, setSender] = useState(["Hey", "Whatsup"]);
  return (
    <div>
      {sender.map((message) => (
        <MessageItem message={message} />
      ))}
    </div>
  );
}
