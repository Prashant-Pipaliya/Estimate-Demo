import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchTerm, onSearchChange, grandTotal }) => {
  return (
    <>
      <div className="bg-dark text-white d-flex flex-column flex-md-row p-2 justify-content-between align-items-md-center align-items-sm-start py-3">
        <h2 className="fs-4 col-md-6 col-12">Estimate</h2>
        <h3 className="fs-4 col-md-6 col-12 text-md-end text-sm-start">Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      <div className="col-md-5 col-lg-4 col-sm-12 py-4">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control shadow-none text-start"
            placeholder="Search by section name"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
