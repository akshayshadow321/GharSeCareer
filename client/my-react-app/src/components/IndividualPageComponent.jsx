import React from "react";

const IndividualPageComponent = () => {
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
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto mt-8 px-6">
        {/* Course Header Section */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Course Preview"
            className="md:w-1/3 w-full"
          />
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800">
              How to Create an Online Course: The Official Udemy Course
            </h2>
            {/* Instructors Section */}
            <section className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800">Instructors</h3>
              <div className="mt-4 text-gray-600">
                <p className="font-bold text-gray-800">Udemy Instructor Team</p>
                <p>Official Udemy Instructor Account</p>
                <p className="mt-2">
                  The Udemy Instructor Team has one passion: Akshay
                </p>
              </div>
            </section>
            <p className="text-gray-600 mt-4">
              Use our recommended best practices to plan, produce, and publish a
              well-designed, high-quality Udemy course.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-500 font-semibold">4.6</span>
              <span className="text-gray-600 ml-2">(6,081 ratings)</span>
              <span className="text-gray-600 ml-4">195,847 students</span>
            </div>
            <p className="text-gray-500 mt-2">1hr 28min of on-demand video</p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Enroll now
            </button>
          </div>
        </div>

        {/* Side-by-Side Sections */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* What You'll Learn Section */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">
              Description
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>How to structure a course effectively</li>
              <li>Best practices for video production</li>
              <li>Marketing your course to students</li>
              <li>Engaging students with interactive content</li>
            </ul>
          </section>

          {/* Course Content Section */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Course Content</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>1: Introduction (10 mins)</li>
              <li>2: Planning Your Course (20 mins)</li>
              <li>3: Creating Engaging Videos (30 mins)</li>
              <li>4: Publishing and Marketing (28 mins)</li>
            </ul>
          </section>
        </div>
        {/* Reviews Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
          <div className="mt-4 space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
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
      </main>
    </div>
  );
};

export default IndividualPageComponent;
