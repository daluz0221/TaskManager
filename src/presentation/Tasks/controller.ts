import { Request, Response } from "express";



export class TaskController {

    constructor(
    ){}

    public getAllTasks = (req: Request, res: Response) => {
          
            res.json("Get all tasks")
    
    };


    public createTask = (req: Request, res: Response) => {
          
        res.json("Create Task")

    };

    public updateTask = (req: Request, res: Response) => {
          
        res.json("update Task")

    };

    public deleteTask = (req: Request, res: Response) => {
          
        res.json("Delete Task")

    };

}


