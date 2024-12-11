import React from "react";

const IndividualPageComponent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Main Content */}
      <main className="container mx-auto mt-8 px-6">
        {/* Course Header */}
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
            <p className="text-gray-600 mt-4">
              Use our recommended best practices to plan, produce, and publish a well-designed, high-quality Udemy course.
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
          {/* What You'll Learn */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Description</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>How to structure a course effectively</li>
              <li>Best practices for video production</li>
              <li>Marketing your course to students</li>
              <li>Engaging students with interactive content</li>
            </ul>
          </section>

          {/* Course Content */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Course Content</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>1: Introduction (10 mins)</li>
              <li>2: Planning Your Course (20 mins)</li>
              <li>3: Creating Engaging Videos (30 mins)</li>
              <li>4: Publishing and Marketing (28 mins)</li>
            </ul>
          </section>

          {/* Reviews */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
            <div className="mt-4">
              <div className="text-yellow-500 text-2xl font-bold">4.6</div>
              <div className="mt-2 space-y-1 text-gray-600">
                <p>★★★★★ - 61%</p>
                <p>★★★★☆ - 30%</p>
                <p>★★★☆☆ - 7%</p>
                <p>★★☆☆☆ - 2%</p>
                <p>★☆☆☆☆ - 1%</p>
              </div>
            </div>
          </section>

          {/* Instructors */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Instructors</h3>
            <div className="mt-4 text-gray-600">
              <p className="font-bold text-gray-800">Udemy Instructor Team</p>
              <p>Official Udemy Instructor Account</p>
              <p className="mt-2">
                The Udemy Instructor Team has one passion: Udemy's instructors!
                We'll work with you to help create an online course...
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default IndividualPageComponent;
