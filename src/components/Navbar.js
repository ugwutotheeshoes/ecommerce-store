import React, { useState, useEffect } from "react";
import {
  FaShoppingBag,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const showMiniLinks = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="nav-container">
      <h1 className="logo-name">Sevanis</h1>
      <form className="search-bar">
        <input
          className="search-input"
          placeholder="Search for products, brands"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </form>
      <ul className="mini-links">
        <li className="nav-links">
          <button className="nav-toggle" onClick={showMiniLinks}>
            <FaUserCircle />
          </button>
        </li>
        <li className="nav-links">
          <button className="nav-toggle" onClick={showMiniLinks}>
            <FaQuestionCircle />
          </button>
        </li>
        <li className="nav-links">
          <button className="nav-toggle" onClick={showMiniLinks}>
            <FaShoppingBag />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
