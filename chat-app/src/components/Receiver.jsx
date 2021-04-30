import React, { useState } from "react";
import { MessageItem } from "./MessageItem";

export function Receiver() {
  const [receiver, setReceiver] = useState(["I'm good", "How are you"]);
  return (
    <div>
      {receiver.map((receiverMsg, index) => (
        <MessageItem message={receiverMsg} keyy={index}/>
      ))}
    </div>
  );
}
