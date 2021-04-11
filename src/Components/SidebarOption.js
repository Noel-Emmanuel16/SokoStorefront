import React from "react";
import "../SidebarOption.css";

function SidebarOption({ text, number, active }) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <h2>{text + number}</h2>
    </div>
  );
}

export default SidebarOption;
