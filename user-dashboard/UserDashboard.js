import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../user-dashboard/UserSidebar";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find((user) => user.email === userEmail);

    // if (!loggedInUser) {
    //   navigate("/login"); // Redirect to login if not authenticated
    // } else {
    //   setUserData(loggedInUser);
    // }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div className="user-dashboard">
      {/* Logout Button on Top-Right */}
      <div className="top-bar">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <UserSidebar />

      <div className="container">
        {userData ? (
          <div className="profile">
            <h2>Welcome {userData.name}</h2>
            <div className="my-courses">
              <h3>Your Courses</h3>
              {/* Display courses */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
