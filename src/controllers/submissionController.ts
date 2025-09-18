import { type Request, type Response } from "express";
import type { CreateSubmissionDTO } from "../dtos/CreateSubmissionDto.js";
import { StatusCodes } from "http-status-codes";

export function addSubmission(req : Request, res : Response) {
    const submissionDTO = req.body as CreateSubmissionDTO;

    return res.status(StatusCodes.OK).json({
        success: true,
        error: {},
        message: "successfully collected the submission",
        data: submissionDTO
    })
}