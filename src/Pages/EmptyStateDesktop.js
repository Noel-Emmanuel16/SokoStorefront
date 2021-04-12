import React from "react";
import emoji from "../images/emoji.jpg";

function EmptyStateDesktop() {
  return (
    <div className="empty">
      <img src={emoji} alt="" />
      <h2>It's empty here</h2>
      <p>Start shopping to add items to your bag</p>
      <button>Back to homepage</button>
    </div>
  );
}

export default EmptyStateDesktop;
