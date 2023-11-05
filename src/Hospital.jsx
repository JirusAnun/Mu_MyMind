import React from 'react';
import { Link } from 'react-router-dom';
import "./Hospital.css"

const Hospital = () => {
    const hospitals = ['โรงพยาบาลกลาง', 'โรงพยาบาล นครปฐม','โรงพยาบาลรามาธิบดี', 'โรงพยาบาลศิริราช', 'โรงพยาบาลสมเด็จพระปิ่นเกล้า']; // Add your hospital names here

    const handleButtonClick = (hospital) => {
    };

    return (
        <div className='hosContainer'>
            <h1 className='hosTitle'>เลือกโรงพยาบาล</h1>
            {hospitals.map((hospital, index) => (
                <Link to="/Appointment">
                    <button className='btn btn-2' style={{
                        maxHeight: '70px',
                        width: '270px',
                        fontSize: '14px',
                    }} 
                    key={index} onClick={() => handleButtonClick(hospital) }>
                    {hospital}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Hospital;