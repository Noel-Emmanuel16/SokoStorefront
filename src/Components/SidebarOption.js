import React from "react";
import "../SidebarOption.css";

function SidebarOption({ text, number, active, icon }) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <div>{icon}</div>
      <h2>{text + number}</h2>
    </div>
  );
}

export default SidebarOption;
