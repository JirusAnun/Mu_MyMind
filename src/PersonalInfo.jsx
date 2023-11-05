import React, { useState } from 'react';
import './PersonalInfo.css';

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); // Add age state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Email: ' + email);
    console.log('Age: ' + age); // Include age in the submission
  };

  return (
    <div>
      <h2 className="label">Personal Information Form</h2>
      <form onSubmit={handleSubmit} className="personal-info-form">
        <div>
          <label htmlFor="firstName" className="label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="age" className="label">
            Age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
          />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;