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
import Hospital from './Hospital.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/Landing",
    element: <Landing />,
  },
  {
    path: "/Hospital",
    element: <Hospital />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
