import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"]; // Add more doctors as needed

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Appointment booked for ${name} with ${doctor} on ${date} at ${time}`
    );
    setName("");
    setAge("");
    setTime("");
    setDate("");
    setDoctor("");
  };

  return (
    <form className="ap-form" onSubmit={handleSubmit}>
      <p className="appoHead">นัดเวลาพบแพทย์</p>
      <p className="appoText">
        ชื่อจริง
        <input
        className="ap-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </p>
      <p className="appoText">
        Email
        <input
        className="ap-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </p>
      <p className="appoText">
        เพศ
        <select
            className="ap-input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">--Please choose a gender--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </p>
      <p className="appoText">
        อายุ
        <input
        className="ap-input"
            
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </p>
      <p className="appoText">
        ที่ปรึกษา
        <select
        className="ap-input"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        >
          <option value="">--Please choose a doctor--</option>
          {doctors.map((doc, index) => (
            <option key={index} value={doc}>
              {doc}
            </option>
          ))}
        </select>
      </p>
      <p className="appoText">
        วันที่
        <input
        className="ap-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </p>
      <p className="appoText">
        เวลา
        <input
        className="ap-input"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </p>
      <div className="button-container">
        <Link to="/home" className="linkAlone">
          <input
            className="btn btn-4"
            type="submit"
            value="   ยืนยันการนัดหมาย   "
          />
        </Link>
      </div>
    </form>
  );
};

export default Appointment;
