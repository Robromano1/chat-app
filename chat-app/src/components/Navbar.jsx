import React, { useState } from "react";
import "../stylesheets/navbar.css";

export function Navbar() {
  const [username, setUsername] = useState("Guest");

  return (
    <div className="header">
      <h3>Hi {username}!</h3>
      <p className="img">Image will go here</p>
    </div>
  );
}
