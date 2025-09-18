import express from "express";
import { addSubmission } from "../../controllers/submissionController.js";
import { validate } from "../../validators/createSubmissionValidator.js";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto.js";

const router = express.Router();

router.post("/", validate(createSubmissionZodSchema), addSubmission);

export default router;