import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './home';
import AboutUs from './Pages/aboutUs';
import Login from './Pages/login';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
  {
    path: "/login",
    element: <Login />
  }
])
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
