import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';
const router = express.Router();

router.post(
  '/api/users/signup',
  [
    
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  
  ],async (req: Request, res: Response)=>
  {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      throw new RequestValidationError(errors.array());
    }
    // if(!email || typeof email != "string"){
    //   res.status(400).send("provide a valid email");
    // }
    console.log("Creating a User")
    throw new DatabaseConnectionError();
    res.send({});
  }
);

export { router as signupRouter };