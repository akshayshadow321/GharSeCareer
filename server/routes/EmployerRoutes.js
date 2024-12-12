import express from "express";

import { EmpAuth, empRegister , addJob} from "../controllers/EmployerController.js";

const router = express.Router();

router.post('/empAuth', EmpAuth);
router.post('/empRegister', empRegister);
router.post('/addJob', addJob);


export default router;