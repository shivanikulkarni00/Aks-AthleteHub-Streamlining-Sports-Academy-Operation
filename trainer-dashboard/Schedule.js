import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the trainer's schedule from localStorage or API
    const storedSchedule = JSON.parse(localStorage.getItem("trainerSchedule")) || [];
    setSchedule(storedSchedule);
  }, []);

  return (
    <div className="dashboard-section">
      <h3>Trainer's Schedule</h3>
      {schedule.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index}>
                <td>{session.day}</td>
                <td>{session.time}</td>
                <td>{session.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No schedule available.</p>
      )}
    </div>
  );
};

export default Schedule;
