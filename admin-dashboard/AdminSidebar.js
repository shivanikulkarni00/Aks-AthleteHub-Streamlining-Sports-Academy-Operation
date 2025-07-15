import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/AdminSidebar.css"; // Optional, for styling

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Dashboard</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/manage-users" className="sidebar-link">
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/manageTrainer" className="sidebar-link">
              Manage Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/manageCourses" className="sidebar-link">
              Manage Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/mailList" className="sidebar-link">
              MailList
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
