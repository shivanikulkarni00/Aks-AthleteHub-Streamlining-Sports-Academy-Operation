// // import React, { useState, useEffect } from "react";

// // const Profile = () => {
// //   const [trainerProfile, setTrainerProfile] = useState({
// //     name: "",
// //     email: "",
// //     expertise: "",
// //   });

// //   useEffect(() => {
// //     // Fetch trainer's profile from localStorage or API
// //     const storedProfile = JSON.parse(localStorage.getItem("trainerProfile")) || {};
// //     setTrainerProfile(storedProfile);
// //   }, []);

// //   const handleChange = (e) => {
// //     setTrainerProfile({
// //       ...trainerProfile,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSave = () => {
// //     // Save updated profile to localStorage or API
// //     localStorage.setItem("trainerProfile", JSON.stringify(trainerProfile));
// //     alert("Profile updated successfully!");
// //   };

// //   return (
// //     <div className="dashboard-section">
// //       <h3>Profile</h3>
// //       <form>
// //         <div>
// //           <label>Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={trainerProfile.name}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={trainerProfile.email}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div>
// //           <label>Expertise</label>
// //           <input
// //             type="text"
// //             name="expertise"
// //             value={trainerProfile.expertise}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <button type="button" onClick={handleSave}>
// //           Save Changes
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;

// import React, { useState, useEffect } from "react";

// const Profilet= () => {
//   const [trainerProfile, setTrainerProfile] = useState({
//     name: "",
//     email: "",
//     expertise: "",
//   });

//   useEffect(() => {
//     const storedProfile = JSON.parse(localStorage.getItem("trainerProfile")) || {};
//     setTrainerProfile(storedProfile);
//   }, []);

//   const handleChange = (e) => {
//     setTrainerProfile({
//       ...trainerProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     localStorage.setItem("trainerProfile", JSON.stringify(trainerProfile));
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div className="dashboard-section" style={{ 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//       minHeight: '200px', 
//       padding: '20px' 
//     }}>
//       <div className="profile-container" style={{
//         width: '400px',
//         border: '1px solid #ccc',
//         padding: '20px',
//         borderRadius: '5px',
//         boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#f9f9f9'
//       }}>
//         <h3>Profile</h3>
//         <form>
//           <div className="form-group" style={{ marginBottom: '15px' }}>
//             <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={trainerProfile.name}
//               onChange={handleChange}
//               required
//               style={{
//                 width: 'calc(100% - 10px)',
//                 padding: '8px',
//                 border: '1px solid #ccc',
//                 borderRadius: '3px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: '15px' }}>
//             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={trainerProfile.email}
//               onChange={handleChange}
//               required
//               style={{
//                 width: 'calc(100% - 10px)',
//                 padding: '8px',
//                 border: '1px solid #ccc',
//                 borderRadius: '3px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: '15px' }}>
//             <label htmlFor="expertise" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Expertise</label>
//             <input
//               type="text"
//               id="expertise"
//               name="expertise"
//               value={trainerProfile.expertise}
//               onChange={handleChange}
//               required
//               style={{
//                 width: 'calc(100% - 10px)',
//                 padding: '8px',
//                 border: '1px solid #ccc',
//                 borderRadius: '3px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>
//           <button type="button" onClick={handleSave} className="save-button" style={{
//             backgroundColor: '#007bff',
//             color: 'white',
//             padding: '10px 15px',
//             border: 'none',
//             borderRadius: '3px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s'
//           }}>
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profilet;

import React, { useState, useEffect } from "react";

const TrainerProfile = () => {
  const [trainerProfile, setTrainerProfile] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "", // New field added
  });

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("trainerProfile")) || {};
    setTrainerProfile(storedProfile);
  }, []);

  const handleChange = (e) => {
    setTrainerProfile({
      ...trainerProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("trainerProfile", JSON.stringify(trainerProfile));
    alert("Trainer Profile updated successfully!");
  };

  return (
    <div className="dashboard-section" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px', 
      padding: '20px' 
    }}>
      <div className="profile-container" style={{
        width: '400px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>Trainer Profile</h3>
        <form>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={trainerProfile.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={trainerProfile.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="expertise" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Expertise</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={trainerProfile.expertise}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="experience" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Experience (Years)</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={trainerProfile.experience}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button type="button" onClick={handleSave} className="save-button" style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerProfile;
