import React from "react";
import '../stylesheets/chat.css';

export function MessageItem({ message, receiverMsg, key, keyy }) {
  return (
    <div className="messageWrap">
      <div id={key} className="senderMsg">{message}</div>
      <div id={keyy} className="receiverMsg">{receiverMsg}</div>
    </div>
  );
}
