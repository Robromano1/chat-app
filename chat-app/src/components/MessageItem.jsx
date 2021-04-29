import React from "react";

export function MessageItem({ message, receiverMsg }) {
  return (
    <div>
      <div>{message}</div>
      <div>{receiverMsg}</div>
    </div>
  );
}
