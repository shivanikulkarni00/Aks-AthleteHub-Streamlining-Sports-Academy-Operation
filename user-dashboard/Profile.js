// // import React, { useState, useEffect } from "react";

// // const Profile = () => {
// //   const [userProfile, setUserProfile] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     age: "",
// //     address: ""
// //   });

// //   useEffect(() => {
// //     // Fetch user's profile data from localStorage or an API
// //     const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
// //     setUserProfile(storedProfile);
// //   }, []);

// //   const handleChange = (e) => {
// //     setUserProfile({
// //       ...userProfile,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSave = () => {
// //     // Save updated profile to localStorage or API
// //     localStorage.setItem("userProfile", JSON.stringify(userProfile));
// //     alert("Profile updated successfully!");
// //   };

// //   const styles = {
// //     page: {
// //       backgroundColor: "#f4f4f4",
// //       minHeight: "100vh",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       padding: "20px",
// //     },
// //     container: {
// //       maxWidth: "500px",
// //       padding: "30px",
// //       borderRadius: "12px",
// //       boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
// //       backgroundColor: "#ffffff",
// //       textAlign: "center",
// //       fontFamily: "Arial, sans-serif",
// //     },
// //     input: {
// //       width: "100%",
// //       padding: "12px",
// //       margin: "10px 0",
// //       borderRadius: "8px",
// //       border: "1px solid #ccc",
// //       fontSize: "16px",
// //       transition: "border 0.3s ease-in-out",
// //     },
// //     button: {
// //       width: "100%",
// //       padding: "12px",
// //       backgroundColor: "#007bff",
// //       color: "#fff",
// //       border: "none",
// //       borderRadius: "8px",
// //       fontSize: "16px",
// //       cursor: "pointer",
// //       marginTop: "12px",
// //       transition: "background-color 0.3s ease-in-out",
// //     },
// //     label: {
// //       fontWeight: "bold",
// //       display: "block",
// //       textAlign: "left",
// //       marginTop: "12px",
// //       fontSize: "14px",
// //       color: "#333",
// //     },
// //   };

// //   return (
// //     <div style={styles.page}>
// //       <div style={styles.container}>
// //         <h3>User Profile</h3>
// //         <form>
// //           <div>
// //             <label style={styles.label}>Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={userProfile.name}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //           <div>
// //             <label style={styles.label}>Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={userProfile.email}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //           <div>
// //             <label style={styles.label}>Phone</label>
// //             <input
// //               type="tel"
// //               name="phone"
// //               value={userProfile.phone}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //           <div>
// //             <label style={styles.label}>Age</label>
// //             <input
// //               type="number"
// //               name="age"
// //               value={userProfile.age}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //           <div>
// //             <label style={styles.label}>Address</label>
// //             <input
// //               type="text"
// //               name="address"
// //               value={userProfile.address}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //           <button type="button" onClick={handleSave} style={styles.button}>
// //             Save
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useState, useEffect } from "react";

// const Profile = () => {
//   const [userProfile, setUserProfile] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     address: ""
//   });

//   useEffect(() => {
//     // Fetch user's profile data from localStorage or an API
//     const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
//     setUserProfile(storedProfile);
//   }, []);

//   const handleChange = (e) => {
//     setUserProfile({
//       ...userProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch("http://localhost:7071/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userProfile),
//       });

//       if (response.ok) {
//         alert("Profile updated successfully!");
//       } else {
//         alert("Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("An error occurred while updating the profile.");
//     }
//   };

//   const styles = {
//     page: {
//       backgroundColor: "#f4f4f4",
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "20px",
//     },
//     container: {
//       maxWidth: "500px",
//       padding: "30px",
//       borderRadius: "12px",
//       boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
//       backgroundColor: "#ffffff",
//       textAlign: "center",
//       fontFamily: "Arial, sans-serif",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       margin: "10px 0",
//       borderRadius: "8px",
//       border: "1px solid #ccc",
//       fontSize: "16px",
//       transition: "border 0.3s ease-in-out",
//     },
//     button: {
//       width: "100%",
//       padding: "12px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "8px",
//       fontSize: "16px",
//       cursor: "pointer",
//       marginTop: "12px",
//       transition: "background-color 0.3s ease-in-out",
//     },
//     label: {
//       fontWeight: "bold",
//       display: "block",
//       textAlign: "left",
//       marginTop: "12px",
//       fontSize: "14px",
//       color: "#333",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <h3>User Profile</h3>
//         <form>
//           <div>
//             <label style={styles.label}>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={userProfile.name}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//           <div>
//             <label style={styles.label}>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={userProfile.email}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//           <div>
//             <label style={styles.label}>Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={userProfile.phone}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//           <div>
//             <label style={styles.label}>Age</label>
//             <input
//               type="number"
//               name="age"
//               value={userProfile.age}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//           <div>
//             <label style={styles.label}>Address</label>
//             <input
//               type="text"
//               name="address"
//               value={userProfile.address}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//           <button type="button" onClick={handleSave} style={styles.button}>
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    setUserProfile(storedProfile);
  }, []);

  const validate = () => {
    let newErrors = {};

    if (!userProfile.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format";
    }

    if (!userProfile.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:7071/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  const styles = {
    error: { color: "red", fontSize: "14px" },
    input: { width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
    button: { width: "100%", padding: "12px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", marginTop: "12px" },
  };

  return (
    <div>
      <h3>User Profile</h3>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={userProfile.name} onChange={handleChange} style={styles.input} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={userProfile.email} onChange={handleChange} style={styles.input} />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" name="phone" value={userProfile.phone} onChange={handleChange} style={styles.input} />
          {errors.phone && <div style={styles.error}>{errors.phone}</div>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" value={userProfile.age} onChange={handleChange} style={styles.input} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={userProfile.address} onChange={handleChange} style={styles.input} />
        </div>
        <button type="button" onClick={handleSave} style={styles.button}>Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
