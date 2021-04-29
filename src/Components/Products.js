import React from "react";

// Components
import emoji from "../images/emoji.jpg";

function Products() {
  return (
    <div className="bag">
      <img src={emoji} alt="sad emoji" />
      <h2>It's empty here</h2>
      <p>Start shopping to add items to your bag</p>
    </div>
  );
}

export default Products;
