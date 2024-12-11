import LandingPage from './pages/LandingPage'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AddCourse from './pages/AddCourse';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
