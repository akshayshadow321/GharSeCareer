import React, { useState } from "react";
import { FaBell, FaExclamationTriangle, FaCheck } from "react-icons/fa";

const Notifications = () => {
  // Sample notifications with descriptions
  const [notifications] = useState([
    { id: 1, title: "New Course Available!", description: "Check out the new courses available for this month." },
    { id: 2, title: "Update: Your profile is verified.", description: "Your account is now verified and ready to use." },
    { id: 3, title: "Approved: Your Account has been approved", description: "Your account has been approved for the job." },
  ]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Notification Icon */}
      <div className="relative flex items-center justify-center p-2 bg-white shadow-md rounded-lg">
        <FaBell className="text-2xl text-gray-600" />
      </div>

      {/* Notification Dropdown */}
      <div className="mt-4 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start justify-between p-3 rounded-md mb-2 bg-white text-gray-800"
          >
            {/* Exclamation Icon */}
            <FaExclamationTriangle className="text-yellow-500 mr-3 text-xl" />

            <div className="flex-1">
              {/* Notification Title and Description */}
              <span className="font-semibold">{notification.title}</span>
              <p className="text-sm text-gray-500">{notification.description}</p>
            </div>

            {/* Static Check Icon with Hover Effect */}
            <button className="transition-colors duration-200 hover:text-green-700 text-green-500">
              <FaCheck />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
