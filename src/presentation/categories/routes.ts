import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares";
import { CategoryRepositoryImpl } from "../../infraestructure/repositories/category.repository.impl";
import { CategoryDatasourceImpl } from "../../infraestructure/datasource/category.datasource.impl";





export class CategoryRoutes {


    static get routes(): Router {


        const router = Router();

        const datasource = new CategoryDatasourceImpl();
        const categoryRepository = new CategoryRepositoryImpl( datasource );
        const categoryController = new CategoryController( categoryRepository );


        router.use( AuthMiddleware.validateJWT )

        //Definir las rutas
        router.post('/', categoryController.getAllCategories);
        router.post('/category/:id', categoryController.getCategoryById);
        router.post('/create', categoryController.createCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.put('/delete/:id', categoryController.deleteCategory);

        return router;

    }



}

