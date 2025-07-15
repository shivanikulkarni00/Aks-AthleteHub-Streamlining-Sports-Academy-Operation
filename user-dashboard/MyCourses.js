import React, { useState, useEffect } from "react";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch user's courses from localStorage or an API
    const storedCourses = JSON.parse(localStorage.getItem("userCourses")) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <div className="dashboard-section">
      <h3>My Courses</h3>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <p>{course.name} - {course.duration}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default MyCourses;
