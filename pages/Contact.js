// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8086/Api/Mail/post", // Fixed URL syntax
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Response from server:", response.data);
//       alert("Message sent successfully!");

//       // Reset form fields
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-12 text-center">
//             <h1 className="contact-title">Contact Us</h1>
//             <p className="contact-intro">
//               Get in touch with us for any inquiries, questions, or to join our academy.
//             </p>
//           </div>

//           <div className="col-xl-6 contact-info">
//             <h3>Academy Contact Info</h3>
//             <p><strong>Email:</strong> info@sportsacademy.com</p>
//             <p><strong>Phone:</strong> +1 234 567 890</p>
//             <p><strong>Address:</strong> 123 Sports Ave, City, Country</p>
//           </div>

//           <div className="col-xl-6">
//             <h3>Send Us a Message</h3>
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <label>
//                 Name:
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//               </label>
//               <label>
//                 Email:
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//               </label>
//               <label>
//                 Message:
//                 <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
//               </label>
//               <button type="submit" className="btn-submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:7071/api/contacts/submit", formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       setSuccessMessage("Message sent successfully!");
//       setTimeout(() => navigate("/messages"), 2000); // Redirect to messages page
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="form-wrapper">
//         <h1>Contact Us</h1>
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//           <label>Message:</label>
//           <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

//           <button type="submit" className="btn-submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:7071/api/contacts/submit",
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Response from server:", response.data);
//       setSuccessMessage("Message sent successfully!");

//       // Reset form fields
//       setFormData({ name: "", email: "", message: "" });

//       // Hide success message after 3 seconds
//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="form-wrapper">
//         <h1>Contact Us</h1>
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>

//           <button type="submit" className="btn-submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7071/api/contacts/submit", // Updated API endpoint
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response from server:", response.data);
      alert("Message sent successfully!");

      // Reset form fields
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-intro">
              Get in touch with us for any inquiries, questions, or to join our academy.
            </p>
          </div>

          <div className="col-xl-6 contact-info">
            <h3>Academy Contact Info</h3>
            <p><strong>Email:</strong> aksFitness@gmail.com.com</p>
            <p><strong>Phone:</strong> +91 8788422615</p>
            <p><strong>Address:</strong> Najushri Lawns,Gangadham Pune48</p>
          </div>

          <div className="col-xl-6">
            <h3>Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              </label>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
