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
import Jobs from './pages/Jobs';
import TestDetails from './components/TestDetails';
import CreateTest from './components/CreateTest';
// import ChatApp from './components/ChatApp';
import RejectedApproval from './components/RejectedApproval';
import EmpDashboard from './pages/EmpDashboard';
import JobApplicants from './components/JobApplicants';
import Courses from './pages/Courses';
import CourseScreen from './pages/CourseScreen';
import JobScreen from './pages/JobScreen'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/pendingApproval' element={<PendingApproval />}></Route>
          <Route path='/testDetails' element={<TestDetails />}></Route>
          <Route path='/createTest' element={<CreateTest />}></Route>
          <Route path='/courseDetails/:id' element={<CourseDetails />}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
          <Route path='/empDash' element={<EmpDashboard/>}></Route>
          <Route path='/jobApplicants' element={<JobApplicants/>}></Route>
          <Route path='/rejectedApproval' element={<RejectedApproval/>}></Route>
          <Route path='/empRegister' element={<EmpRegister/>}></Route>
          <Route path='/jobCreation' element={<AddJobs/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/individualCourse' element={<CourseScreen/>}></Route>
          <Route path='/individualJob' element={<JobScreen/>}></Route>
          <Route path='/individualJob' element={<JobScreen/>}></Route>

          {/* <Route path='/chat' element={<ChatApp/>}></Route> */}
    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
