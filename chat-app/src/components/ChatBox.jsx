import React from "react";
import { Messages } from "./Messages";
import '../stylesheets/chat.css'
import { Sidebar } from "./Sidebar";

export function ChatBox({ messages, onSubmit }) {
  return (
    <div className="chatContainer">
      <Messages messages={messages} onSubmit={onSubmit}/>
    </div>
  );
}
