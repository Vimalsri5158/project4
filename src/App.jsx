/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Student from './Student';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Dashboard">
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Student" element={<Student />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;