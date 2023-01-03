import { RequestValidationError } from '../errors/request-validation-error';
import express, { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from '../errors/database-connection-error';
export const errorHandler = (err: Error,req: Request, res: Response, next: NextFunction)=>{
    console.log("Something is Wrong", err);

    if(err instanceof RequestValidationError){
        console.log("Hadling this error as a request validation Error")
    }
    if(err instanceof DatabaseConnectionError){
        console.log("Database Validation Error");  
    }
    res.status(400).send({
    message: err.message
    });
}