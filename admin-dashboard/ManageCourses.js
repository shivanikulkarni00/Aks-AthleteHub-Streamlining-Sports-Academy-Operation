// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "../styles/AddCourse.css"; // Optional, for styling

// const AddCourse = () => {
//   const [courseName, setCourseName] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const newCourse = {
//       name: courseName,
//       duration: courseDuration
//     };

//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     storedCourses.push(newCourse);
//     localStorage.setItem("courses", JSON.stringify(storedCourses));

//     navigate("/admin-dashboard/manageCourses");
//   };

//   return (
//     <div className="add-course-container">
//       <h3>Add New Course</h3>
//       <div>
//         <label>Course Name:</label>
//         <input
//           type="text"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//           placeholder="Enter course name"
//         />
//       </div>
//       <div>
//         <label>Duration:</label>
//         <input
//           type="text"
//           value={courseDuration}
//           onChange={(e) => setCourseDuration(e.target.value)}
//           placeholder="Enter course duration"
//         />
//       </div>
//       <button onClick={handleSubmit}>Add Course</button>
//     </div>
//   );
// };

// export default AddCourse;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//   const [courseName, setCourseName] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const newCourse = {
//       name: courseName,
//       duration: courseDuration,
//     };

//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     storedCourses.push(newCourse);
//     localStorage.setItem("courses", JSON.stringify(storedCourses));

//     navigate("/admin-dashboard/manageCourses");
//   };

//   const styles = {
//     container: {
//       maxWidth: "400px",
//       margin: "50px auto",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#f9f9f9",
//       textAlign: "center",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "10px 0",
//       borderRadius: "5px",
//       border: "1px solid #ccc",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       fontSize: "16px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },
//     label: {
//       fontWeight: "bold",
//       display: "block",
//       textAlign: "left",
//       marginTop: "10px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h3>Add New Course</h3>
//       <div>
//         <label style={styles.label}>Course Name:</label>
//         <input
//           type="text"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//           placeholder="Enter course name"
//           style={styles.input}
//         />
//       </div>
//       <div>
//         <label style={styles.label}>Duration:</label>
//         <input
//           type="text"
//           value={courseDuration}
//           onChange={(e) => setCourseDuration(e.target.value)}
//           placeholder="Enter course duration"
//           style={styles.input}
//         />
//       </div>
//       <button onClick={handleSubmit} style={styles.button}>Add Course</button>
//     </div>
//   );
// };

// export default AddCourse;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//   const [courseName, setCourseName] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError(null);
    
//     const newCourse = {
//       name: courseName,
//       duration: courseDuration,
//     };

//     try {
//       const response = await fetch("http://localhost:7071/api/courses/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newCourse),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add course");
//       }

//       navigate("/manageCourses");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     container: {
//       maxWidth: "400px",
//       margin: "50px auto",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#f9f9f9",
//       textAlign: "center",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "10px 0",
//       borderRadius: "5px",
//       border: "1px solid #ccc",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       fontSize: "16px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },
//     label: {
//       fontWeight: "bold",
//       display: "block",
//       textAlign: "left",
//       marginTop: "10px",
//     },
//     error: {
//       color: "red",
//       marginTop: "10px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h3>Add New Course</h3>
//       {error && <p style={styles.error}>{error}</p>}
//       <div>
//         <label style={styles.label}>Course Name:</label>
//         <input
//           type="text"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//           placeholder="Enter course name"
//           style={styles.input}
//         />
//       </div>
//       <div>
//         <label style={styles.label}>Duration:</label>
//         <input
//           type="text"
//           value={courseDuration}
//           onChange={(e) => setCourseDuration(e.target.value)}
//           placeholder="Enter course duration"
//           style={styles.input}
//         />
//       </div>
//       <button onClick={handleSubmit} style={styles.button} disabled={loading}>
//         {loading ? "Adding..." : "Add Course"}
//       </button>
//     </div>
//   );
// };

// export default AddCourse;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    
    const newCourse = {
      name: courseName,
      duration: courseDuration,
    };

    try {
      const response = await fetch("http://localhost:7071/api/courses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error("Failed to add course");
      }

      setSuccessMessage("Course added successfully!");
      setTimeout(() => navigate("/manageCourses"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
    label: {
      fontWeight: "bold",
      display: "block",
      textAlign: "left",
      marginTop: "10px",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    success: {
      color: "green",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h3>Add New Course</h3>
      {error && <p style={styles.error}>{error}</p>}
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      <div>
        <label style={styles.label}>Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Enter course name"
          style={styles.input}
        />
      </div>
      <div>
        <label style={styles.label}>Duration:</label>
        <input
          type="text"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          placeholder="Enter course duration"
          style={styles.input}
        />
      </div>
      <button onClick={handleSubmit} style={styles.button} disabled={loading}>
        {loading ? "Adding..." : "Add Course"}
      </button>
    </div>
  );
};

export default AddCourse;

