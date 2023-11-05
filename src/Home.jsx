import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
    return (
        <div>
            <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/logo.png?raw=true" alt="Asset3" width="50" height="50" className='logoHome'/>
            <p className='nameText'>My Mind</p>
            <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/profile.png?raw=true" alt="Asset3" width="30" height="30" className='profileImg'/>
        <div>
            <img src="https://github.com/JirusAnun/Mu_MyMind/blob/main/src/assets/cover.png?raw=true" alt="Asset3" className='cover'/>
        </div>
        <div className='surveyContainer'>
            <Link to="/Dass21">
                <button className='surveyBtn1'>แบบประเมิน{'\n'}ซึมเศร้า</button>
            </Link>
            <Link to="/Suicide">
                <button className='surveyBtn1'>แบบประเมิน{'\n'}ฆ่าตัวตาย</button>
            </Link>
            <Link to="/WellBeing">
                <button className='surveyBtn1'>แบบวัด{'\n'}การรับรู้ทางจิต</button>
            </Link>
        </div>
        <Link to="/course">
                <button className='programBtn'>เข้าร่วมโปรแกรมส่งเสริมสุขภาพจิตใจ</button>
        </Link>
        <div className='appoiContainer'>
            <Link to="/Appointment">
                <button className='appoiBtn1'>นัดรับคำปรึกษา</button>
            </Link>
            <Link to="/Hospital">
                <button className='appoiBtn1'>นัดพบแพทย์</button>
            </Link>
        </div>
        <Link to="/home">
                <button className='chat'>พูดคุยกับเรา</button>
        </Link>
        </div>
      );
}

export default Home