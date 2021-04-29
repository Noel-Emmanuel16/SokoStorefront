import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import Media from "react-media";

function Navbar() {
  return (
    <Media queries={{ small: { maxWidth: 768 } }}>
      {(matches) =>
        matches.small ? (
          <div className="navbar">
            <div className="profile">
              <div className="banner-mobile">
                <AiOutlineShop />
              </div>
              <div>
                <div className="heading-one">Target</div>
                <div className="location">
                  Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
                </div>
              </div>
            </div>
          </div>
        ) : (
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
              <NavIcon
                link="/empty"
                icon={<IoBagHandleOutline />}
                label="Bag"
              />
              <NavIcon
                link="/user:username"
                icon={<IoPersonOutline />}
                label="Account"
              />
            </div>
          </div>
        )
      }
    </Media>
  );
}

function NavIcon({ icon, label, link }) {
  return (
    <Link to={link} className="nav-icon">
      <div>{icon}</div>
      <div>{label}</div>
    </Link>
  );
}
export default Navbar;
