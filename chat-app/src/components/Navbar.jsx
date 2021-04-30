import React, { useState } from "react";
import "../stylesheets/navbar.css";

export function Navbar() {
  const [username] = useState("Guest");

  return (
    <div className="header">
      <h3>Hi {username}!</h3>
      <img
        className="profile-image"
        src="images/photo-1506744038136-46273834b3fb.jpg"
        alt="profile"
      />
    </div>
  );
}
