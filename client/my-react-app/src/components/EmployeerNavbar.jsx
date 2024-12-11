import React, { useState } from 'react';
import AccountBubble from './AccountBubble';
import LoginButton from './LoginButton';
import SigninButton from './SignInButton';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function EmployeerHamburger() {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>

            <nav className="navbar flex flex-row h-[20%] items-center" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }}>
                <div className="container-fluid flex items-center justify-between">

                    <div className="flex items-center">
                        <button onClick={toggleMenu} className="text-white text-2xl p-2">
                            <FaBars />
                        </button>
                    </div>


                    <Link to="/">
                        <div className="navbar-brand flex items-center">
                            <h2 className='text-white text-2xl ms-4'>GharSeCareer</h2>
                        </div>
                    </Link>


                    <div className={`flex justify-between w-[600px] items-center ${isMenuOpen ? 'ml-[250px]' : ''}`}>
                        <div className="w-full">
                            <ul className="navbar-nav text-white flex flex-row w-full justify-evenly">
                                <li className="nav-item">
                                    <Link to="courses">
                                        <h1 className="nav-link text-white hover:scale-105 transition-all">Courses</h1>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="products">
                                        <h1 className="nav-link text-white hover:scale-105 transition-all">Jobs</h1>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {localStorage.getItem("username") ? (
                            <AccountBubble />
                        ) : (
                            <div className="flex flex-col gap-2">
                                <LoginButton bg='bg-yellow-300' />
                                <SigninButton bg='bg-yellow-300' />
                            </div>
                        )}
                    </div>
                </div>
            </nav>


<div className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="p-4">

        <h1 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h1>


        <ul className="space-y-4">
            <li>
                <Link to="/enrolled-courses" className="text-l font-bold text-gray-700 hover:text-blue-500">Enrolled Courses</Link>
            </li>
            <li>
                <Link to="/chat-box" className="text-l font-bold text-gray-700 hover:text-blue-500">Chat Box</Link>
            </li>
            <li>
                <Link to="/profile-settings" className="text-l font-bold text-gray-700 hover:text-blue-500">Profile Settings</Link>
            </li>
        </ul>
    </div>
    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl">
        <FaTimes /> 
    </button>
</div>

        </>
    );
}
