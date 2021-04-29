import React from "react";
import "../Card.css";
import { Link } from "react-router-dom";

function Card({ img, name, price }) {
  return (
    <div className="card">
      <div className="card-title">
        <img src={img} alt="Face Mask" />
        <div className="card-details">
          <h2>{name}</h2>
          <p>{price}</p>
          <Link to="/product?query=woodbench">Product details</Link>
        </div>
      </div>
      <button className="card-btn">+ Add</button>
    </div>
  );
}

export default Card;
