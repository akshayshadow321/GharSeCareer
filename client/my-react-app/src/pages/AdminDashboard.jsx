import React from 'react'
import { useState } from 'react'


const AdminDashboard = () => {
    const [view,setView] = useState('user')
    const viewUser = () =>{
        <h1>Users</h1>
    }
    const viewEmployers = () =>{
        <h1>Employers</h1>
    }
    const viewEmpApplicants = () =>{
        <h1>Applicants</h1>
    }
  return (
    <div>
        {view == 'user'?viewUser() :view == 'emp'? viewEmployers ():viewEmpApplicants() }
    </div>
  )
}

export default AdminDashboard