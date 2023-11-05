import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Landing from './Landing'
import Login from './Login'

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;