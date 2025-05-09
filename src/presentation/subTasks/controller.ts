import { Request, Response } from "express";



export class SubTaskController {

    constructor(
    ){}

    public getAllSubTasks = (req: Request, res: Response) => {
          
            res.json("Get all subtasks")
    
    };


    public createSubTask = (req: Request, res: Response) => {
          
        res.json("Create SubTask")

    };

    public updateSubTask = (req: Request, res: Response) => {
          
        res.json("update SubTask")

    };

    public deleteSubTask = (req: Request, res: Response) => {
          
        res.json("Delete SubTask")

    };

}


