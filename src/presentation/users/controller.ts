import { Request, Response } from "express";



export class UserController {

    constructor(
        // private readonly categoryRepository:
    ){}


    public getAllUsers = (req: Request, res: Response) => {
      
        res.json("Get all users")

    };


    public registerUser = (req: Request, res: Response) => {
      
        res.json("Register User")

    };


    public loginUser = (req: Request, res: Response) => {
      
        res.json("login del user")

    };

}


