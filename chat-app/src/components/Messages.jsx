import { MessageItem } from "./MessageItem";
import "../stylesheets/chat.css";

export function Messages({ onSubmit, sender, receiver }) {
  return (
    <div>
      <div className="senderWrap">
        <MessageItem sender={sender} onSubmit={onSubmit} />
      </div>
      <div id="receiverContainer" className="receiverWrap">
        <MessageItem receiver={receiver} />
      </div>
    </div>
  );
}
