import React from "react";
import { Messages } from "./Messages";
import "../stylesheets/chat.css";

export function ChatBox({ onSubmit, sender, receiver }) {
  return (
    <div id="chat" className="chatContainer">
      <Messages sender={sender} receiver={receiver} onSubmit={onSubmit} />
    </div>
  );
}
