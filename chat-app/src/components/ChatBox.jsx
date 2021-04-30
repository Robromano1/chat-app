import React from "react";
import { Messages } from "./Messages";
import '../stylesheets/chat.css'
import { Sidebar } from "./Sidebar";

export function ChatBox() {
  return (
    <div className="chatContainer">
      <Messages />
      <Sidebar />
    </div>
  );
}
