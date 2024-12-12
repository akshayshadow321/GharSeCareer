import LandingPage from './pages/LandingPage'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddCourse from './pages/AddCourse';
import AddContent from './pages/AddContent';
import AdminDashboard from './pages/AdminDashboard';
import PlayVideo from './components/PlayVideo';
import PendingApproval from './pages/PendingApproval';
import CourseDetails from './components/CourseDetails';
import AddJobs from './components/AddJobs';
import EmpRegister from './components/EmpRegister';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddContent />}></Route>
          <Route path='/pendingApproval' element={<PendingApproval />}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
