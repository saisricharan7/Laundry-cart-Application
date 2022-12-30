import React, { useState } from "react";
import "./home_header.css";
import Avatar from './pngegg.png'
import { useNavigate } from "react-router-dom";

const Homeheader = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const changeHandler = () => {
    setShowLogout(!showLogout);
  };
  const logoutHandler = () => {
    localStorage.clear();
   navigate("/login");
  };
  return (
    <div className="header">
      <h1 className="header_title">LAUNDRY</h1>
      <nav>
        <ul className="nav_lists">
          <li className="nav_lists__links">Home</li>
          <li className="nav_lists__links">Pricing</li>
          <li className="nav_lists__links">Career</li>
          <li className="nav_lists__links color">
            <span className="home_pic"><img src={Avatar} alt="Profile" width="40px" onClick={changeHandler}/></span>
            
          </li>
        </ul>
      </nav>
      {showLogout && (
        <div onClick={logoutHandler} className="logout">
          Logout
        </div>
      )}
    </div>
  );
};

export default Homeheader;
