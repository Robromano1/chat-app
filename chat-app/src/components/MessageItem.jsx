import React from "react";
import '../stylesheets/chat.css';

export function MessageItem({ messages }) {
  return (
   <>
    {messages ? messages.map((msg, idx) => (
      <ul>
        <li key={idx}>
          {msg}
        </li>
      </ul>
    )) : ''}
   </>
  );
}
