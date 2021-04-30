import React from "react";
import "../stylesheets/chat.css";

export function MessageItem({ sender, receiver }) {
  return (
    <div>
      {sender
        ? sender.map((msg, idx) => (
            <ul className="senderMsg">
              <li key={idx}>{msg}</li>
            </ul>
          ))
        : receiver.map((msg, idx) => (
            <ul className="receiverMsg">
              <li key={idx} className="receiverMsgItem">
                {msg}
              </li>
            </ul>
          ))}
    </div>
  );
}
