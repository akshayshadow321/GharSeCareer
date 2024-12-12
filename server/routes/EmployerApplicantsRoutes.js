import express from "express";
import { createApplication, getApplicants, updateRequestStatus} from "../controllers/EmployerApplicationController.js";

const router = express.Router();

router.post('/createApplication', createApplication);
router.get('/getApplicants', getApplicants);
router.post('/updateStatus', updateRequestStatus);

export default router;