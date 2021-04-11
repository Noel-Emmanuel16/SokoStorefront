import React from "react";
import "../Sidebar.css";
import SidebarOption from "./SidebarOption";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <SidebarOption text="Electronics " number="(12)" active={true} />
      <SidebarOption text="Face Masks " number="(3)" />
      <SidebarOption text="Fresh Food " number="(8)" />
      <SidebarOption text="Grocery " number="(6)" />
      <SidebarOption text="Home " number="(24)" />
      <SidebarOption text="Kids" number="(9)" />
      <SidebarOption text="View all categories" number=">"/>
    </div>
  );
}

export default LeftSidebar;
