import React from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom';



function Landing() {
  const navigate = useNavigate();

  const LoginClicked = () => {
    return(navigate("/login"))
  };

  const RegisterClicked = () => {
    return(navigate("/register"))
  };

  return (
    <div className='landingContainer'>
        <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/logo.png?raw=true" alt="Asset3" width="100" height="100" className='logo'/>
        <p className='desc'>แอปสุขภาวะจิตใจสำหรับเด็กและเยาวชน</p>
        <p className='descSub'>ให้ความสุขทั้งกายและใจในชีวิตประจำวัน</p>
         <div className='buttonContainer'>
            <button onClick={LoginClicked} className='login-button'>เข้าสู่ระบบ</button>
            <button onClick={RegisterClicked} className='register-button'>สมัครสมาชิก</button>
         </div>
         <button onClick={LoginClicked} className='start-button'>เริ่มต้นใช้งาน</button>
         <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/1x/display.png?raw=true" alt="Display" className="bottom-image" />
    </div>
  )
}

export default Landing