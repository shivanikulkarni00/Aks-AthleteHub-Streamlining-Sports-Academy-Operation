// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS

// // const SignupForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("");  // Admin, User, Trainer
// //   const [message, setMessage] = useState(""); // For showing user feedback
// //   const navigate = useNavigate();

// //   const checkIfUserExists = (email) => {
// //     // Simulating a user check (this could be an API call in real life)
// //     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
// //     return existingUsers.some((user) => user.email === email);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (email && password && role) {
// //       // Check if the user already exists
// //       if (checkIfUserExists(email)) {
// //         setMessage("User already exists. Please log in.");
// //         return;
// //       }

// //       // Simulating signup by saving to localStorage
// //       const newUser = { email, password, role };
// //       const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
// //       existingUsers.push(newUser);
// //       localStorage.setItem("users", JSON.stringify(existingUsers));

// //       // Redirect based on role
// //       if (role === "Admin") {
// //         navigate("/admin-dashboard");
// //       } else if (role === "User") {
// //         navigate("/user-dashboard");
// //       } else if (role === "Trainer") {
// //         navigate("/trainer-dashboard");
// //       }

// //       // Optionally, you could navigate back to login page after successful signup
// //       // navigate("/");
// //     } else {
// //       setMessage("Please fill in all fields.");
// //     }
// //   };

// //   return (
// //     <div
// //       className="signup-form d-flex justify-content-center align-items-center"
// //       style={{
// //         height: "100vh",
// //         background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Fitness-themed background
// //       }}
// //     >
// //       <div className="card p-4" style={{ width: "400px" }}>
// //         <h2 className="text-center mb-4">Signup for Fitness & Sports Academy</h2>
// //         <form onSubmit={handleSubmit}>
// //           {message && <div className="alert alert-warning">{message}</div>}

// //           <div className="mb-3">
// //             <label className="form-label">Email</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Role</label>
// //             <select
// //               className="form-select"
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               required
// //             >
// //               <option value="">Select Role</option>
// //               <option value="Admin">Admin</option>
// //               <option value="User">User</option>
// //               <option value="Trainer">Trainer</option>
// //             </select>
// //           </div>
// //           <button type="submit" className="btn btn-primary w-100">
// //             Signup
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupForm;



// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const SignupForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!email || !password || !role) {
// //       setMessage("Please fill in all fields.");
// //       return;
// //     }

// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const response = await fetch("http://localhost:7071/users/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ email, password, role }),
// //       });

// //       const data = await response.json();
      
// //       if (response.ok) {
// //         setMessage("Signup successful! Redirecting...");
// //         setTimeout(() => {
// //           if (role === "ADMIN") {
// //             navigate("/admin-dashboard");
// //           } else if (role === "USER") {
// //             navigate("/user-dashboard");
// //           } else if (role === "TRAINER") {
// //             navigate("/trainer-dashboard");
// //           }
// //         }, 1000);
// //       } else {
// //         setMessage(data.message || "Signup failed. Please try again.");
// //       }
// //     } catch (error) {
// //       setMessage("Error connecting to the server. Please try again later.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div
// //       className="signup-form d-flex justify-content-center align-items-center"
// //       style={{
// //         height: "100vh",
// //         background: "linear-gradient(to right, #ff7e5f, #feb47b)",
// //       }}
// //     >
// //       <div className="card p-4" style={{ width: "400px" }}>
// //         <h2 className="text-center mb-4">Signup for Fitness & Sports Academy</h2>
// //         <form onSubmit={handleSubmit}>
// //           {message && <div className="alert alert-warning">{message}</div>}

// //           <div className="mb-3">
// //             <label className="form-label">Email</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Role</label>
// //             <select
// //               className="form-select"
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               required
// //             >
// //               <option value="">Select Role</option>
// //               <option value="ADMIN">Admin</option>
// //               <option value="USER">User</option>
// //               <option value="TRAINER">Trainer</option>
// //             </select>
// //           </div>
// //           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
// //             {loading ? "Signing up..." : "Signup"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupForm;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password || !role) {
//       setMessage("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("http://localhost:7071/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage("Signup successful! Redirecting...");
//         setTimeout(() => {
//           navigate("/login");
//         }, 1000);
//       } else {
//         setMessage(data.message || "Signup failed. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to the server. Please try again later.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div
//       className="signup-form d-flex justify-content-center align-items-center"
//       style={{
//         height: "100vh",
//         background: "linear-gradient(to right, #ff7e5f, #feb47b)",
//       }}
//     >
//       <div className="card p-4" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Signup for Fitness & Sports Academy</h2>
//         <form onSubmit={handleSubmit}>
//           {message && <div className="alert alert-warning">{message}</div>}

//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Role</label>
//             <select
//               className="form-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="ADMIN">Admin</option>
//               <option value="USER">User</option>
//               <option value="TRAINER">Trainer</option>
//             </select>
//           </div>
//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? "Signing up..." : "Signup"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Role validation
    if (!role) {
      newErrors.role = "Please select a role.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:7071/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error connecting to the server. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div
      className="signup-form d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      }}
    >
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Signup for Fitness & Sports Academy</h2>
        <form onSubmit={handleSubmit}>
          {message && <div className="alert alert-warning">{message}</div>}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className={`form-select ${errors.role ? "is-invalid" : ""}`}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
              <option value="TRAINER">Trainer</option>
            </select>
            {errors.role && <div className="invalid-feedback">{errors.role}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
  