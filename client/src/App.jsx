import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Taskspage } from "/pages/Taskspage";
import { TaskFormPage } from "/pages/TaskFormPage";
import { Navigation } from './components/Navigation';




const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>    

      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Taskspage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App