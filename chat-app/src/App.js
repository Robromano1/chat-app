import "./App.css";
import { Navbar } from "./components/Navbar";
import { ChatBox } from "./components/ChatBox";
import { Sidebar } from "./components/Sidebar";
import { MessageForm } from "./components/MessageForm";
import React, { useState } from "react";

function App() {
  const [sender] = useState(["Hey", "Whatsup"]);
  const [receiver, setReceiver] = useState(["I'm good", "How are you"]);

  const handleSubmit = (text) => {
    setReceiver([...receiver, text]);
  };

  return (
    <div className="App">
      <Navbar />
      <ChatBox sender={sender} receiver={receiver}/>
      <Sidebar />
      <MessageForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
