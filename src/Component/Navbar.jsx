import React from "react";
import { Link } from "react-router-dom"
import '../assets/Css/navbar.css'
import { FaHome, FaClipboardList } from "react-icons/fa"; // 🎨 นำเข้าไอคอนที่ต้องการ
function Navbar() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">
          <i className="fa-solid fa-house"></i> Home
        </Link>
      </li>
      <li>
        <Link to="/Template">
          <i className="fa-solid fa-list" ></i> Template
        </Link>
      </li>
    </ul>
  </nav>
);
}
export default Navbar;
