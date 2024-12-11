import React from "react";
import img2 from "../assets/images/img2.png"
import { Link } from "react-router-dom";
import { FaDesktop, FaClipboardList, FaCertificate, FaGlobe, FaBriefcase, FaUsers } from "react-icons/fa";

export default function LandingPage() {
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
        <>

            {/* Hero Section */}
            <div className="container mx-auto mt-15 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section (Text Content) */}
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            The <span className="text-orange-500">Smart</span> Choice For{" "}
            <span className="text-blue-500">Future</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Empowering housewives through online courses to develop new skills and enhance
            existing ones. Explore a variety of educational resources tailored to your needs.
            Find flexible, work-from-home job opportunities with companies looking for skilled
            workers.
          </p>
          <div>
            <Link to="/user">
              <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900 mr-4">
                Get Started as User
              </button>
            </Link>
            <Link to="/employee">
              <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900">
                Get Started as Employee
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Image Content) */}
        <div className="flex justify-center">
          <img
            className="w-full h-auto max-w-screen-md rounded-lg shadow-lg"
            src={img2} // Replace with your image path
            alt="Landing Illustration"
          />
        </div>
      </div>
    </div>
            {/* Features Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-purple-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-white text-xl font-bold mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>

            <hr className="mt-5" />

            {/* Additional Info Section */}
            <section className="bg-gray-100 py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        How will Ghar Se Career work for you?
                    </h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                        A portal connecting people across India to accomplish career aspirations enabling them to start or restart their career from home. GHAR SE CAREER is a single platform for GHAR SE OFFICE opportunities. We aim to transform the traditional way of work and talent hunt.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Work From Anywhere */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-green-600 mb-4">
                                <FaGlobe className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Work From Anywhere
                            </h3>
                            <p className="text-gray-600">
                                A virtual collaboration taking a step towards the future of working environment - REMOTE WORKING.
                            </p>
                        </div>

                        {/* Find The Right Job */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-green-600 mb-4">
                                <FaBriefcase className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Find The Right Job
                            </h3>
                            <p className="text-gray-600">
                                Ignite your career at any stage of your life without stepping out of the comfort of your home along with work flexibility.
                            </p>
                        </div>

                        {/* Find The Right Candidate */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-green-600 mb-4">
                                <FaUsers className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Find The Right Candidate
                            </h3>
                            <p className="text-gray-600">
                                Find exclusive candidates for specific job profiles working from home irrespective of age, qualification, and geographic hindrances.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="mt-1" />
        </>
    );
}
