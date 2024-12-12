import express from "express";

import { EmpAuth } from "../controllers/EmployerController.js";

const router = express.Router();

router.post('/empAuth', EmpAuth);


export default router;