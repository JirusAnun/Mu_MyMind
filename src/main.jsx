import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dass21 from './Dass21.jsx';
import Suicide from './Suicide.jsx';
import WellBeing from './WellBeing.jsx';
import Appointment from './Appointment.jsx';
import Landing from './Landing.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PersonalInfoForm from './PersonalInfo.jsx';
import Hospital from './Hospital.jsx';
import Home from './Home.jsx';
import Course from './Course.jsx';
import StudyCourse from './StudyCourse.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Dass21",
    element: <Dass21 />,
  },
  {
    path: "/Suicide",
    element: <Suicide />,
  },
  {
    path: "/WellBeing",
    element: <WellBeing />,
  },
  {
    path: "/Appointment",
    element: <Appointment />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/PersonalInfo",
    element: <PersonalInfoForm />,
  },
  {
    path: "/Hospital",
    element: <Hospital />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/course/study",
    element: <StudyCourse/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="83113793832-5evpgq291i3ob5imhncd4cr8itqpjv7k.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
