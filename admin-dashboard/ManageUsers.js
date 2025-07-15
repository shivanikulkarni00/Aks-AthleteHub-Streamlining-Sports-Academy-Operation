//  import React, { useState, useEffect } from "react";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:7071/api/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   const handleUpdateUser = async (id, updatedUser) => {
//     try {
//       const response = await fetch(`http://localhost:7071/api/users/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedUser),
//       });
//       if (response.ok) {
//         setUsers(users.map(user => (user.id === id ? updatedUser : user)));
//         setMessage("User updated successfully!");
//       } else {
//         setMessage("Failed to update user.");
//       }
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:7071/api/users/${id}`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         setUsers(users.filter(user => user.id !== id));
//         setMessage("User deleted successfully!");
//       } else {
//         setMessage("Failed to delete user.");
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   return (
//     <div className="manage-users">
//       <div className="container">
//         <h2>Manage Users</h2>
//         {message && <p className="message">{message}</p>}

//         <table className="users-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Address</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="6">No users found.</td>
//               </tr>
//             ) : (
//               users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.age}</td>
//                   <td>{user.address}</td>
//                   <td>
//                     <button
//                       className="btn-update"
//                       onClick={() => handleUpdateUser(user.id, { ...user, name: "Updated Name" })}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="btn-delete"
//                       onClick={() => handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;

import React, { useState, useEffect } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:7071/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUpdateUser = async (id, updatedUser) => {
    try {
      const response = await fetch(`http://localhost:7071/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        setMessage("User updated successfully!");
      } else {
        setMessage("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:7071/api/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
        setMessage("User deleted successfully!");
      } else {
        setMessage("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="manage-users" style={{ padding: "20px" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Manage Users</h2>
        {message && <p className="message" style={{ color: "green", textAlign: "center" }}>{message}</p>}

        <table className="users-table" style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white", textAlign: "left" }}>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>ID</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Name</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Email</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Age</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Address</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>No users found.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{user.id}</td>
                  <td style={{ padding: "10px" }}>{user.name}</td>
                  <td style={{ padding: "10px" }}>{user.email}</td>
                  <td style={{ padding: "10px" }}>{user.age}</td>
                  <td style={{ padding: "10px" }}>{user.address}</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      className="btn-update"
                      style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "5px 10px", marginRight: "5px", cursor: "pointer" }}
                      onClick={() => handleUpdateUser(user.id, { ...user, name: "Updated Name" })}
                    >
                      Update
                    </button>
                    <button
                      className="btn-delete"
                      style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
