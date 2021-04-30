import React from "react";
import "../stylesheets/sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="userName">
        <h4>Name</h4>
        <span>Rob</span>
      </div>
      <div className="userAge">
        <h4>Age</h4>
        <span>29</span>
      </div>
      <div className="imgWrap">
        <img
          className="userImg"
          src="images/photo-1506744038136-46273834b3fb.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
}
