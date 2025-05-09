import { Router } from "express";
import { CategoryController } from "./controller";





export class CategoryRoutes {


    static get routes(): Router {


        const router = Router();


        const categoryController = new CategoryController()

        //Definir las rutas
        router.get('/', categoryController.getAllCategories);
        router.post('/', categoryController.createCategory);
        router.put('/update/:id', categoryController.updateCategory);
        router.put('/delete/:id', categoryController.deleteCategory);

        return router;

    }



}

