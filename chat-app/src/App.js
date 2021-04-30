import "./App.css";
import { Navbar } from "./components/Navbar";
import { ChatBox } from "./components/ChatBox";
import { Sidebar } from "./components/Sidebar";
import { MessageForm } from "./components/MessageForm";
import React, { useEffect, useState } from "react";

function App() {
  const [sender, setSender] = useState(["Hey", "Whatsup"]);
  const [receiver, setReceiver] = useState(["I'm good", "How are you"]);
  const [messages, setMessages] = useState([
    "Hey",
    "Whatsup",
    "I'm good",
    "How are you",
  ]);

  const [message, setMessage] = useState({
    body: "",
  });

  const handleSubmit = (text) => {
    setMessages([...messages, text]);
  };

  useEffect(() => {
    
  }, [messages])

  return (
    <div className="App">
      <Navbar />
      <ChatBox messages={messages}/>
      <Sidebar />
      <MessageForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
