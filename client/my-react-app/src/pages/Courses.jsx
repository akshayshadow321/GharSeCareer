import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  // Example array of course data
  const courses = [
    {
      id: 1,
      title: 'Cooking Course',
      instructor: 'Akshay',
      duration: '5 hours',
      rating: '4/5',
    },
    {
      id: 2,
      title: 'Baking Course',
      instructor: 'Sita',
      duration: '3 hours',
      rating: '5/5',
    },
    {
      id: 3,
      title: 'Photography Course',
      instructor: 'Raj',
      duration: '7 hours',
      rating: '4.5/5',
    },
  ]; 

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/courses');
//         setCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to load courses.');
//       }
//     };

//     fetchCourses();
//   }, []);


  return (
    // <div className="container mx-auto p-6">
    //   <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

    //   {error && <p className="text-red-500">{error}</p>}

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {courses.length > 0 ? (
    //       courses.map((course) => (
    //         <div key={course._id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
    //           <h2 className="text-xl font-semibold mb-2">{course.course_name}</h2>
    //           <p className="text-gray-700">Instructor: {course.instructor}</p>
    //           <p className="text-gray-600 mb-4">{course.description}</p>
    //           <p className="text-gray-700">Star Rating: {course.star_rating}</p>

    //           {/* Enroll Now Button */}
    //           <div className="flex justify-center mt-auto">
    //             <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">
    //               Enroll Now
    //             </button>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No courses available.</p>
    //     )}
    //   </div>
    // </div>
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

    {/* Loop through courses array and display each course */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
          <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
          <p className="text-gray-600 mb-1">Duration: {course.duration}</p>
          <p className="text-gray-700">Star Rating: {course.rating}</p>

          {/* View Details Button */}
          <div className="flex justify-center mt-4">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Courses;
