import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { type ZodSchema } from "zod";

export const validate = (schema : ZodSchema<any>) => (req : Request, res : Response, next : NextFunction) => {
    try {
        console.log("inside validator");
        schema.parse({
            ...req.body
        });

        next();

    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Invalid request params received',
            data: {},
            error: error 
        })
    }
}