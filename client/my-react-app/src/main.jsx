import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Courses from './pages/Courses.jsx'
import Jobs from './pages/Jobs.jsx'
import CourseScreen from './pages/CourseScreen.jsx'
import JobScreen from './pages/JobScreen.jsx'
import Test from './components/Test.jsx'
import PlayVideo from './pages/PlayVideo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayVideo/>
  </StrictMode>,
)
