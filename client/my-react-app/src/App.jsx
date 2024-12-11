import LandingPage from './pages/LandingPage'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddCourse from './pages/AddCourse';
import AddContent from './pages/AddContent';
import AdminDashboard from './pages/AdminDashboard';
import PlayVideo from './components/PlayVideo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlayVideo/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
