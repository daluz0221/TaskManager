import { Request, Response } from "express";

import { CategoryRepository, CreateCategoryDto, DeleteCategoryDto, UpdateCategoryDto } from "../../domain";
import { handlerError } from "../../config/errors";



export class CategoryController {

    constructor(
        private readonly categoryRepository: CategoryRepository
    ){}

    public getCategoryById = async(req: Request, res: Response) => {
      
        const id = req.params.id;

        

        try {
            const category = await this.categoryRepository.getCategory( id, req );
            
            res.json( category )
        } catch (error) {
            handlerError( error, res )
        }

    };

    public getAllCategories = async(req: Request, res: Response) => {
          
        try {
            const categories = await this.categoryRepository.getAllCategorys( req.body.user.id );
            res.json(categories)
        } catch (error) {
            handlerError( error, res )
        }

    
    };


    public createCategory = async(req: Request, res: Response) => {

        const categoryData = {
            ...req.body,
            userId: req.body.user.id
        }

        const [ error, createCategoryDto ] = CreateCategoryDto.create( categoryData);
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const category =  await this.categoryRepository.createCategory( createCategoryDto! )
            res.json( category );
            return;
        } catch (error) {
            handlerError( error, res )
        }
          

    };

    public updateCategory = async(req: Request, res: Response) => {
          
        const id = req.params.id;

        const [error, updatedCategoryDto] = UpdateCategoryDto.create({...req.body, id});
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const updatedCategory = await this.categoryRepository.updateCategory( updatedCategoryDto! );
            console.log({updatedCategory});
            
            res.json({
                status: 'ok',
                updatedCategory
            })
        } catch (error) {
            handlerError( error, res )
        }

    };

    public deleteCategory = async(req: Request, res: Response) => {
          
        const id = req.params.id;

        const [error, deleteCategoryDto] = DeleteCategoryDto.create({...req.body, id});
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const deleteCategory = await this.categoryRepository.deleteCategory( deleteCategoryDto! );
            console.log({deleteCategory});
            
            res.json({
                status: 'ok',
                deleteCategory
            })
        } catch (error) {
            handlerError( error, res )
        }


    };

}


