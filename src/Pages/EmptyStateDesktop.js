import React from "react";
import emoji from "../images/emoji.jpg";
import { Link } from "react-router-dom";

function EmptyStateDesktop() {
  return (
    <div className="empty">
      <img src={emoji} alt="" />
      <h2>It's empty here</h2>
      <p>Start shopping to add items to your bag</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default EmptyStateDesktop;
