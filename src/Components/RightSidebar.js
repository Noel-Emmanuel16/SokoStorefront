import React from "react";

// Components
import Heading from "./Heading";
import Products from "./Products";


function RightSidebar() {
  return (
    <div className="right-sidebar">
      <Heading classN="heading" label="Bags" num="0" />
      <Products />
    </div>
  );
}

export default RightSidebar;
