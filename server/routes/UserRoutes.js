import express from "express";

import { createUser, check, auth, getUsers } from "../controllers/UserController.js";

const router = express.Router();

router.post('/createUser', createUser);
router.post('/check', check);
router.post('/auth', auth);
router.get('/getUsers', getUsers);

export default router;