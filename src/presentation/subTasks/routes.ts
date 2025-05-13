import { Router } from "express";
import { SubTaskController } from "./controller";
import { AuthMiddleware } from "../middlewares";
import { SubTaskRepositoryImpl } from "../../infraestructure/repositories/subtask.repository.impl";
import { SubTaskDatasourceImpl } from "../../infraestructure/datasource/subtask.datasource.impl";





export class SubTaskRoutes {


    static get routes(): Router {


        const router = Router();


        const datasource = new SubTaskDatasourceImpl();
        const subTaskRepository = new SubTaskRepositoryImpl( datasource );
        const subTaskController = new SubTaskController( subTaskRepository );


        router.use( AuthMiddleware.validateJWT )

        //Definir las rutas
        router.post('/', subTaskController.getAllSubTasks);
        router.post('/subtask/:id', subTaskController.getSubTaskById);
        router.post('/create', subTaskController.createSubTask);
        router.put('/update/:id', subTaskController.updateSubTask);
        router.put('/delete/:id', subTaskController.deleteSubTask);

        return router;

    }



}

