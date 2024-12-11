import React from "react";
import { FaDesktop, FaClipboardList, FaCertificate } from "react-icons/fa";

const LandingFeatureSection = () => {
    const features = [
        {
            icon: <FaDesktop className="text-4xl text-blue-500" />,
            title: "Learn New Skills from Home",
            description:
                "Empower yourself with tailored courses and training programs designed for housewives to upskill and prepare for remote job opportunities.",
        },
        {
            icon: <FaClipboardList className="text-4xl text-green-500" />,
            title: "Explore Flexible Career Options",
            description:
                "Find jobs that match your skills and schedule, offering the flexibility to balance work and family life effectively.",
        },
        {
            icon: <FaCertificate className="text-4xl text-purple-500" />,
            title: "Gain Recognition for Your Efforts",
            description:
                "Earn certifications for your achievements and enhance your profile to stand out in the competitive remote work landscape.",
        },
    ];
    

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-purple-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingFeatureSection;
