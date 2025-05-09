import { Router } from "express";
import { SubTaskController } from "./controller";





export class SubTaskRoutes {


    static get routes(): Router {


        const router = Router();


        const subTaskController = new SubTaskController()

        //Definir las rutas
        router.get('/', subTaskController.getAllSubTasks);
        router.post('/', subTaskController.createSubTask);
        router.put('/update/:id', subTaskController.updateSubTask);
        router.put('/delete/:id', subTaskController.deleteSubTask);

        return router;

    }



}

