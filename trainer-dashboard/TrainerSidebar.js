import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/TrainerSidebar.css"; // Optional, for styling

const TrainerSidebar = () => {
  return (
    <div className="trainer-sidebar">
      <h3>Trainer Dashboard</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/schedule" className="sidebar-link">
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/managestudents" className="sidebar-link">
              Manage Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/profilet" className="sidebar-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TrainerSidebar;
