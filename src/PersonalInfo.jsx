import React, { useState } from 'react';
import './PersonalInfo.css';
import { useNavigate } from 'react-router-dom';

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); // Add age state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    return navigate("/home")
  };

  return (
    <div className="font">
      <h2 className="label">กรุณากรอกข้อมูลของท่าน</h2>
      <form onSubmit={handleSubmit} className="personal-info-form">
        <div>
          <p htmlFor="firstName" className="label">
            ชื่อจริง
          </p>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <p htmlFor="lastName" className="label">
            นามสกุล
          </p>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <p htmlFor="email" className="label">
            อีเมล
          </p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <p htmlFor="age" className="label">
            อายุ
          </p>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
          />
        </div>

        <button onClick={handleSubmit} type="submit" className="btn-4 btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;