import { ErrorRequestHandler } from "express";
import { AppError } from "./AppError";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof AppError)
        return res.status(error.status).json({ error: error.message });
    else {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

export default errorHandler;