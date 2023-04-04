import React from 'react';
import './style.css';
import Home from './Pages/home';
import Tasks from './Pages/tasks';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}
