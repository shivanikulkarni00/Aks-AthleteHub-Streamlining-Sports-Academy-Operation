// // import React, { useEffect, useState } from "react";
// // import AdminSidebar from "../admin-dashboard/AdminSidebar"; // Make sure this exists in your project
// // import "../styles/AdminDashboard.css";

// // const AdminDashboard = () => {
// //   const [adminData, setAdminData] = useState(null);
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true); // For loading state

// //   // useEffect(() => {
// //   //   const adminEmail = localStorage.getItem("adminEmail");

// //   //   // Check if admin is logged in by validating their email
// //   //   if (!adminEmail) {
// //   //     window.location.href = "/login"; // Redirect if not logged in
// //   //   } else {
// //   //     setAdminData({ email: adminEmail });
// //   //     // Fetch users from localStorage (you can replace this with API call in real world)
// //   //     const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
// //   //     setUsers(usersFromStorage);
// //   //     setLoading(false); // Set loading state to false once data is fetched
// //   //   }
// //   // }, []);

// //   const handleDeleteUser = (email) => {
// //     // Remove user from the list and update localStorage
// //     const updatedUsers = users.filter(user => user.email !== email);
// //     setUsers(updatedUsers);
// //     localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage
// //   };

// //   const handleEditUser = (email) => {
// //     // You could navigate to an edit user page or implement inline editing
// //     console.log(`Editing user with email: ${email}`);
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <AdminSidebar />
// //       <div className="container">
// //         {adminData ? (
// //           <div className="profile">
// //             <h2>Welcome Admin</h2>
// //             {/* Manage Users Section */}
// //             <div className="manage-users">
// //               <h3>Manage Users</h3>
// //               {loading ? (
// //                 <p>Loading...</p>
// //               ) : (
// //                 <table className="table">
// //                   <thead>
// //                     <tr>
// //                       <th>Email</th>
// //                       <th>Role</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {users.length === 0 ? (
// //                       <tr>
// //                         <td colSpan="3">No users found</td>
// //                       </tr>
// //                     ) : (
// //                       users.map((user) => (
// //                         <tr key={user.email}>
// //                           <td>{user.email}</td>
// //                           <td>{user.role}</td>
// //                           <td>
// //                             <button onClick={() => handleEditUser(user.email)} className="btn btn-warning">
// //                               Edit
// //                             </button>
// //                             <button onClick={() => handleDeleteUser(user.email)} className="btn btn-danger">
// //                               Delete
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))
// //                     )}
// //                   </tbody>
// //                 </table>
// //               )}
// //             </div>
// //           </div>
// //         ) : (
// //           <p>Loading...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// import React, { useEffect, useState } from "react";
// import AdminSidebar from "../admin-dashboard/AdminSidebar"; // Make sure this exists in your project
// import "../styles/AdminDashboard.css";

// const AdminDashboard = () => {
//   const [adminData, setAdminData] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true); // For loading state

//   useEffect(() => {
//     const adminEmail = localStorage.getItem("adminEmail");

//     // Check if admin is logged in by validating their email
//     // if (!adminEmail) {
//     //   window.location.href = "/login"; // Redirect if not logged in
//     // } else {
//     //   setAdminData({ email: adminEmail });
//     //   // Fetch users from localStorage (you can replace this with API call in real world)
//     //   const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
//     //   setUsers(usersFromStorage);
//     //   setLoading(false); // Set loading state to false once data is fetched
//     // }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("adminEmail");
//     window.location.href = "/login";
//   };

//   const handleDeleteUser = (email) => {
//     // Remove user from the list and update localStorage
//     const updatedUsers = users.filter(user => user.email !== email);
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage
//   };

//   const handleEditUser = (email) => {
//     // You could navigate to an edit user page or implement inline editing
//     console.log(`Editing user with email: ${email}`);
//   };

//   return (
//     <div className="admin-dashboard">
//       <AdminSidebar />
//       <div className="container">
//         {adminData ? (
//           <div className="profile">
//             <h2>Welcome Admin</h2>
//             <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
//             {/* Manage Users Section */}
//             <div className="manage-users">
//               <h3>Manage Users</h3>
//               {loading ? (
//                 <p>Loading...</p>
//               ) : (
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>Email</th>
//                       <th>Role</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.length === 0 ? (
//                       <tr>
//                         <td colSpan="3">No users found</td>
//                       </tr>
//                     ) : (
//                       users.map((user) => (
//                         <tr key={user.email}>
//                           <td>{user.email}</td>
//                           <td>{user.role}</td>
//                           <td>
//                             <button onClick={() => handleEditUser(user.email)} className="btn btn-warning">
//                               Edit
//                             </button>
//                             <button onClick={() => handleDeleteUser(user.email)} className="btn btn-danger">
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../admin-dashboard/AdminSidebar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");

    // if (!adminEmail) {
    //   navigate("/login"); // Redirect to login if not authenticated
    // } else {
    //   setAdminData({ email: adminEmail });
    //   const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
    //   setUsers(usersFromStorage);
    //   setLoading(false);
    // }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/"); // Redirect to home page after logout
  };

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEditUser = (email) => {
    console.log(`Editing user with email: ${email}`);
  };

  return (
    <div className="admin-dashboard">
      {/* Logout Button on Top-Right */}
      <div className="top-bar">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <AdminSidebar />

      <div className="container">
        {adminData ? (
          <div className="profile">
            <h2>Welcome Admin</h2>
            <div className="manage-users">
              <h3>Manage Users</h3>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan="3">No users found</td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.email}>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                          <td>
                            <button onClick={() => handleEditUser(user.email)} className="btn btn-warning">
                              Edit
                            </button>
                            <button onClick={() => handleDeleteUser(user.email)} className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
