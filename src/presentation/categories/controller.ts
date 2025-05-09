import { Request, Response } from "express";



export class CategoryController {

    constructor(
    ){}

    public getAllCategories = (req: Request, res: Response) => {
          
            res.json("Get all categories")
    
    };

    public getCategoryById = (req: Request, res: Response) => {
          
        res.json("Get category by id")

    };

    public createCategory = (req: Request, res: Response) => {
          
        res.json("Create category")

    };

    public updateCategory = (req: Request, res: Response) => {
          
        res.json("updateCategory category")

    };

    public deleteCategory = (req: Request, res: Response) => {
          
        res.json("Delete category")

    };

}


