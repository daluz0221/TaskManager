import { Request } from "express";
import { CategoryEntity, CategoryRepository, DeleteCategoryDto, UpdateCategoryDto } from "../../domain";
import { CreateCategoryDto } from "../../domain/dtos/categories/create-category.dto";





export class CategoryRepositoryImpl implements CategoryRepository{

    constructor(
        private readonly datasource: CategoryRepository
    ){}

    getAllCategorys(userId: string): Promise<CategoryEntity[]> {
        return this.datasource.getAllCategorys(userId);
    }
    createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.datasource.createCategory( createCategoryDto )
    }
    getCategory(id: string, res:Request): Promise<CategoryEntity> {
        return this.datasource.getCategory( id, res )
    }
    updateCategory(updateCategoryDto: UpdateCategoryDto ): Promise<CategoryEntity> {
        return this.datasource.updateCategory( updateCategoryDto )
    }
    deleteCategory(deleteCategoryDto: DeleteCategoryDto): Promise<CategoryEntity> {
        return this.datasource.deleteCategory( deleteCategoryDto )
    }

}


