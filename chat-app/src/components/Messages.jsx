import React from 'react';
import { Sender } from "./Sender";
import { Receiver } from "./Receiver";

export function Messages() {
  return (
    <div>
      <div className="senderMessageWrap">
        <Sender />
      </div>
      <div className="receiverMessageWrap">
        <Receiver />
      </div>
    </div>
  );
}
