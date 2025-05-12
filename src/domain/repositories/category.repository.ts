


import { Request } from "express";
import { CreateCategoryDto } from "../dtos/categories/create-category.dto";
import { DeleteCategoryDto } from "../dtos/categories/delete-category.dto";
import { UpdateCategoryDto } from "../dtos/categories/update-category.dto";
import { CategoryEntity } from "../entities/category.entity";





export abstract class CategoryRepository {

    abstract getAllCategorys(userId: string): Promise<CategoryEntity[]>
    abstract createCategory( createCategoryDto: CreateCategoryDto ): Promise<CategoryEntity>
    abstract getCategory( id: string, res:Request ): Promise<CategoryEntity>
    abstract updateCategory( updateCategoryDto: UpdateCategoryDto ): Promise<CategoryEntity>
    abstract deleteCategory( deleteCategoryDto: DeleteCategoryDto ): Promise<CategoryEntity>

}