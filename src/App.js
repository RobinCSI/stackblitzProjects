import React from "react";
import "./style.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from './Components/navbar'
import Home from './Pages/home'
import AboutUs from './Pages/aboutUs'
import Login from './Pages/login'
import Register from './Pages/register'
import NoPage from './Pages/noPage'


export default function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Navbar />
    },
    {
      path:"/home",
      element: <Home />
    },
    {
      path:"/aboutUs",
      element: <AboutUs />
    }, 
    {
      path:"/login",
      element: <Login />
    }, 
    {
      path:"/register",
      element: <Register />
    },
    {
      path:"*",
      element: <NoPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}
