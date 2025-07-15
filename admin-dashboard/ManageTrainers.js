import React, { useState, useEffect } from "react";
// import "../styles/ManageTrainer.css";

const ManageTrainer = () => {
  const [trainerData, setTrainerData] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [batchName, setBatchName] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const trainerEmail = localStorage.getItem("trainerEmail");
    // if (!trainerEmail) {
    //   window.location.href = "/login"; // Redirect if not logged in
    // } else {
    //   setTrainerData({ email: trainerEmail });
    //   // Retrieve existing schedule from localStorage
    //   const trainerSchedule = JSON.parse(localStorage.getItem("trainerSchedule")) || [];
    //   setSchedule(trainerSchedule);
    // }
  }, []);

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (batchName && trainingDate && trainingTime && duration) {
      const newBatch = {
        batchName,
        trainingDate,
        trainingTime,
        duration,
      };
      
      const updatedSchedule = [...schedule, newBatch];
      setSchedule(updatedSchedule);
      localStorage.setItem("trainerSchedule", JSON.stringify(updatedSchedule));
      
      // Reset form
      setBatchName("");
      setTrainingDate("");
      setTrainingTime("");
      setDuration("");
      setMessage("Batch added successfully!");
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  const handleDeleteBatch = (index) => {
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
    localStorage.setItem("trainerSchedule", JSON.stringify(updatedSchedule));
  };

  return (
    <div className="manage-trainer">
      <div className="container">
        {trainerData ? (
          <div className="trainer-profile">
            <h2>Manage Your Training Schedule</h2>
            {message && <p className="message">{message}</p>}

            <div className="add-batch-form">
              <h3>Add Training Batch</h3>
              <form onSubmit={handleAddSchedule}>
                <div className="form-group">
                  <label>Batch Name</label>
                  <input
                    type="text"
                    value={batchName}
                    onChange={(e) => setBatchName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Training Date</label>
                  <input
                    type="date"
                    value={trainingDate}
                    onChange={(e) => setTrainingDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Training Time</label>
                  <input
                    type="time"
                    value={trainingTime}
                    onChange={(e) => setTrainingTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Duration (in hours)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Add Batch</button>
              </form>
            </div>

            <div className="schedule">
              <h3>Your Training Schedule</h3>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Batch Name</th>
                    <th>Training Date</th>
                    <th>Training Time</th>
                    <th>Duration (hrs)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.length === 0 ? (
                    <tr>
                      <td colSpan="5">No scheduled batches</td>
                    </tr>
                  ) : (
                    schedule.map((batch, index) => (
                      <tr key={index}>
                        <td>{batch.batchName}</td>
                        <td>{batch.trainingDate}</td>
                        <td>{batch.trainingTime}</td>
                        <td>{batch.duration}</td>
                        <td>
                          <button
                            className="btn-delete"
                            onClick={() => handleDeleteBatch(index)}
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ManageTrainer;
