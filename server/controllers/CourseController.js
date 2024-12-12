import CourseModel from "../models/Course.js";

export const addCourse = async (req, res) => {
  try {
    const { courseName, description, time, mentor } = req.body;

    // Create a new course document
    const newCourse = new CourseModel({
      courseName,
      description,
      time,
      mentor,
      applicants: [],
      video: [],
      test: [],
      refMaterials: [],
      reviews: [],
    });

    // Save the course document to the database
    await newCourse.save();

    // Send success response
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Error creating course', error });
  }
}

export const getCourses = async (req,res) => {
    const response = await CourseModel.find();
    res.json(response);
}

export const specificCourse = async (req,res) => {
    const { id } = req.body
    const response = await CourseModel.findOne({ _id: id })
    console.log("Showing product: " + id)
    res.json(response)
}