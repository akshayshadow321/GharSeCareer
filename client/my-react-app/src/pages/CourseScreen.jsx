import React, { useState } from "react";

const CourseScreen = () => {
  const [showDetails, setShowDetails] = useState(false);

  const reviews = [
    {
      name: "Alice Johnson",
      date: "1 day ago",
      comment:
        "This course was incredibly helpful! The instructor explained everything clearly and the examples were practical.",
    },
    {
      name: "Mark Spencer",
      date: "3 days ago",
      comment:
        "A great experience overall. I learned so many new techniques to enhance my cooking skills.",
    },
    {
      name: "Sophia Lee",
      date: "1 week ago",
      comment:
        "Perfect for beginners and experienced cooks alike. Highly recommend this course!",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Course Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Video/Thumbnail Section */}
        <div>
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://via.placeholder.com/400x250" // Replace with your course thumbnail
            alt="Cooking Course Thumbnail"
            onError={(e) => (e.target.src = "https://via.placeholder.com/400x250")} // Fallback image on error
          />
        </div>

        {/* Course Overview Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            How to Master Cooking
          </h1>
          <p className="text-gray-600 mb-2">
            Instructor: <span className="font-semibold">Akshay</span>
          </p>
          <p className="text-gray-600 mb-2">
            Duration: <span className="font-semibold">5 Hours</span>
          </p>
          <p className="text-gray-600 mb-4">
            Rating: <span className="font-semibold">4.5/5</span>
          </p>

          {/* Key Learnings Section */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What you'll learn:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Master basic and advanced cooking techniques.</li>
            <li>Learn how to prepare international cuisines.</li>
            <li>Understand food safety and hygiene practices.</li>
            <li>Discover tips to enhance your kitchen efficiency.</li>
          </ul>

          {/* Enroll Button */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Course Description
        </h3>
        <p className="text-gray-700">
          This cooking course is designed for enthusiasts who want to take
          their skills to the next level. From understanding the basics to
          mastering complex dishes, this course has it all. Whether you're
          a beginner or an experienced cook, you'll find something to
          improve your culinary journey.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-yellow-800">
                  {review.name}
                </h4>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseScreen;
