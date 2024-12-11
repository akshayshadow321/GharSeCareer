import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInfoCircle, FaTools, FaQuestionCircle } from "react-icons/fa"; // Import common icons
import logo from "../assets/images/ghar se career.jpg"; // Your company logo

function LandingFooter() {
  return (
    
    <div className="min-h-screen flex flex-col mt-10 ">
      {/* Main content area */}
      <div className="flex-grow">
        <footer className="bg-gray-100 py-8 shadow-md drop-shadow-md poppins-semibold">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Company Logo" className="w-16 h-16 mx-5" />
                {/* <h2 className="text-xl font-bold text-purple-600">Ghar Se Career</h2> */}
              </div>
              <p className="text-gray-600 mt-4">
                Empowering housewives by connecting them with flexible and reliable job opportunities that can be done from the comfort of their homes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">About</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaInfoCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Online Courses</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaInfoCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Job Categories</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Remote Work Guide</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTools className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Skill Development</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Support</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaQuestionCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaQuestionCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaQuestionCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaQuestionCircle className="text-purple-600" />
                  <a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Contact Info</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-purple-600" />
                  <span className="text-gray-600">+0913-705-3875</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-purple-600" />
                  <span className="text-gray-600">roshni.mall@somaiya.edu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-purple-600" />
                  <span className="text-gray-600">4808 Mira Road <br /> Days Creek, OR 410002</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {/* Footer section */}
      <div className="mt-8 text-center text-gray-600">
        <p>GharSeCareer &copy; All Rights Reserved, 2024</p>
      </div>
    </div>
  );
};

export default LandingFooter;
