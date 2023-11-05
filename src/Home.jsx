import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
    return (
        <div>
            <img src="./src/assets/logo.png" alt="Asset3" width="50" height="50" className='logoHome'/>
            <p className='nameText'>My Mind</p>
        <Link to="/Dass21">
            <button>Dass21</button>
        </Link>
        <Link to="/Suicide">
            <button>suicide</button>
        </Link>
        <Link to="/WellBeing">
            <button>Well Being</button>
        </Link>
        <Link to="/Appointment">
            <button>Appointment</button>
        </Link>
        <Link to="/Landing">
            <button>Landing</button>
        </Link>
        <Link to="/Hospital">
            <button>Hospital</button>
        </Link>
        </div>
      );
}

export default Home