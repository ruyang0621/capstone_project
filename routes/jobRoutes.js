import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobsController.js";

import testUser from "../middleware/testUser.js";

router.route("/").post(testUser, createJob).get(getAllJobs);
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);
router.route("/stats").get(showStats);

export default router;
