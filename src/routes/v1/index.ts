import express from "express";
import { type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";
import submissionRouter from "./submissionRoutes.js";

const router = express.Router();

router.get("/ping", (req : Request, res : Response) => {
    return res.status(StatusCodes.OK).json({msg: "evalutaion service is up"});
});


router.use("/submissions", submissionRouter);


export default router;