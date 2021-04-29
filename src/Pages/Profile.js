import React from "react";
import "../Profile.css";
import SidebarOption from "../Components/SidebarOption";
import "../SidebarOption.css";

//icons
import { MdLibraryBooks } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

function Profile() {
  return (
    <div className="account">
      <aside>
        <SidebarOption
          icon={<MdLibraryBooks />}
          text="My Order"
          number=""
          active={true}
        />
        <SidebarOption icon={<GrLocation />} text="My addresses" number="" />
      </aside>
      <main>
        <div>
          <h2>Showing all orders</h2>
          <button>
            <span>{<BsFilter />}</span> <span>Filter</span>
          </button>
        </div>
        <div className="orders">
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </main>
    </div>
  );
}

function Order() {
  return (
    <div className="order">
      <div className="avatar">A</div>
      <p>Order #12333441 UGX 12,700</p>
      <p>3 items 12/04/2021</p>
      <div>
        <div className="dot"></div>Shipped
      </div>
    </div>
  );
}

export default Profile;
