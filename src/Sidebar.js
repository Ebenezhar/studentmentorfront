import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href=""
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          Mentor Management
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/TeachersList">
          <i class="fa-solid fa-person-chalkboard"></i>
          <span>Teachers List</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/StudentList">
          <i class="fa-solid fa-children"></i>
          <span>Students List</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
    </ul>
  )
}

export default Sidebar;