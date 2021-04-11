import React from "react";
import { FiSearch } from "react-icons/fi";
import "../Form.css";

function Form() {
  return (
    <form className="input-wrapper">
      <input type="text" placeholder="Search for products..." />
      <button>
        <FiSearch />
      </button>
    </form>
  );
}

export default Form;
