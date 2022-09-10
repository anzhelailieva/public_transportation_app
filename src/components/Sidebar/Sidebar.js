import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav-menu-item">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className='nav-text'>
              <Link to={item.path}>{item.icon}<span>{item.title}</span></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
