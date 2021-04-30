import React from "react";
import { Messages } from "./Messages";
import '../stylesheets/chat.css'

export function ChatBox() {
  return (
    <div className="chatContainer">
      <Messages />
    </div>
  );
}
