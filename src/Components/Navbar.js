import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <div className="profile">
        <div className="banner">
          <AiOutlineShop />
        </div>
        <div>
          <div className="heading-one">Target</div>
          <div className="location">
            Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
          </div>
        </div>
      </div>
      <div className="nav-icons">
        <NavIcon icon={<IoBagHandleOutline />} label="Bag" />
        <NavIcon icon={<IoPersonOutline />} label="Account" />
      </div>
    </div>
  );
}

function NavIcon({ icon, label }) {
  return (
    <div className="nav-icon">
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
}
export default Navbar;
