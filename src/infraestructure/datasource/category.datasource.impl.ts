import { Uuid } from "../../config";
import { prisma } from "../../data/postgresql";
import { CategoryDatasource, CategoryEntity, CustomError, DeleteCategoryDto, UpdateCategoryDto } from "../../domain";
import { CreateCategoryDto } from "../../domain/dtos/categories/create-category.dto";






export class CategoryDatasourceImpl implements CategoryDatasource {


    private async findCategoryById( id: string ){

        try {
            const categoryExists = await prisma.categoria.findUnique({
                where: {
                    id
                }
            });

            return categoryExists
        } catch (error) {
            console.log(`${error}`);
            return;
        }


    };

    async getAllCategorys(userId: string): Promise<CategoryEntity[]> {
        try {
            const allCategories = await prisma.categoria.findMany({
                where: {
                    usuarioId: userId,
                    active: true
                }
            });
            return allCategories.map( cat => CategoryEntity.fromPrisma( cat ) )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
        
    };

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {

        const objCategory = {
            ...createCategoryDto,
            id: Uuid.v4(),
        }

        const newCategory = CategoryEntity.fromPrisma( objCategory );
        const existsCategory = await prisma.categoria.findFirst({
            where: {
                name: newCategory.name
            }
        });

        if (existsCategory){
            throw CustomError.badRequest('Category already exists')
        };

        try {
            await prisma.categoria.create({
                data: objCategory
            });

        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

        return newCategory
    };

    async getCategory(id: string): Promise<CategoryEntity> {

        
        const category = await this.findCategoryById( id );

        if (!category){
            throw CustomError.notFound('Category not found')
        };


        

        return CategoryEntity.fromPrisma( category )

    };


    async updateCategory(updateCategoryDto: UpdateCategoryDto ): Promise<CategoryEntity> {
        
        const category = await this.findCategoryById( updateCategoryDto.id );
        if (!category){
            throw CustomError.notFound('Category not found')
        };

        try {
            const updatedCategory = await prisma.categoria.update({
                where: {
                    id: updateCategoryDto.id
                },
                data: updateCategoryDto!.values
            });
            return CategoryEntity.fromPrisma( updatedCategory )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

    };


    async deleteCategory(deleteCategoryDto: DeleteCategoryDto): Promise<CategoryEntity> {
        const category = await this.findCategoryById( deleteCategoryDto.id );
        if (!category){
            throw CustomError.notFound('Category not found')
        };

        try {
            const updatedCategory = await prisma.categoria.update({
                where: {
                    id: deleteCategoryDto.id
                },
                data: {
                    active: false
                }
            });
            return CategoryEntity.fromPrisma( updatedCategory )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

    };

};