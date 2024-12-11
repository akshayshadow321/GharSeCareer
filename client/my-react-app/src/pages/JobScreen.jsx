import React, { useState } from "react";

const JobScreen = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          {/* Job Post Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Job Banner Image Section */}
            <div>
              <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://via.placeholder.com/400x250" // Replace with your job post banner image
                alt="Job Post Banner"
                onError={(e) => (e.target.src = "https://via.placeholder.com/400x250")} // Fallback image on error
              />
            </div>

            {/* Job Post Overview Section */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Software Developer at Tech Corp
              </h1>
              <p className="text-gray-600 mb-2">
                Mentor: <span className="font-semibold">John Doe</span>
              </p>
              <p className="text-gray-600 mb-2">
                Duration: <span className="font-semibold">6 months</span>
              </p>
              <p className="text-gray-600 mb-4">
                Stipend: <span className="font-semibold">$2000/month</span>
              </p>

              {/* Key Criteria Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Criteria:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>2+ years of experience in software development.</li>
                <li>Proficiency in JavaScript, Node.js, and React.</li>
                <li>Strong problem-solving and analytical skills.</li>
                <li>Good communication and teamwork abilities.</li>
              </ul>

              {/* Apply Now Button */}
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Job Description
            </h3>
            <p className="text-gray-700">
              As a Software Developer at Tech Corp, you'll be responsible for
              building and maintaining web applications, contributing to
              project planning, and working alongside other talented developers.
              This is an excellent opportunity to grow your skills while
              working on exciting and challenging projects.
            </p>
          </div>

        </div>
  );
};

export default JobScreen;
