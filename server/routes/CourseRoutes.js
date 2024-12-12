import express from "express";
import { addCourse, getCourses, specificCourse } from "../controllers/CourseController.js";

const router = express.Router();

router.post('/addCourse', addCourse);
router.get('/getCourses', getCourses);
router.post('/specificCourse', specificCourse);


export default router;