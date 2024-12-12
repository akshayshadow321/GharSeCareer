import express from "express";
import { createApplication } from "../controllers/EmployerApplicationController.js";

const router = express.Router();

router.post('/createApplication', createApplication);

export default router;