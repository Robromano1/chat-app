import React, {useState} from "react";
import '../stylesheets/chat.css';

export function MessageForm({ onSubmit }) {
  const [userText, setUserText] = useState("");
  
	const handleSubmit = e => {
    e.preventDefault();
    onSubmit(userText);
    setUserText('');
  }

  return (
    <div>
      <form className="messageForm" onSubmit={handleSubmit}>
        <input className="msgInput"
          type="text" 
          value={userText}
          placeholder="Type something..."
          onChange={e => setUserText(e.target.value)} 
        />
      </form>
    </div>
  );
}
