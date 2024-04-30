import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Taskspage } from "/pages/Taskspage";
import { TaskFormPage } from "/pages/TaskFormPage";
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast'



const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<Taskspage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App