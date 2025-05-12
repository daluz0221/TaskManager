import { Router } from "express";
import { TaskController } from "./controller";
import { TaskRepositoryImpl } from "../../infraestructure/repositories/task.repository.impl";
import { TaskDatasourceImpl } from "../../infraestructure/datasource/task.datasource.impl";
import { AuthMiddleware } from "../middlewares";





export class TaskRoutes {


    static get routes(): Router {


        const router = Router();

        const datasource = new TaskDatasourceImpl();
        const taskRepository = new TaskRepositoryImpl( datasource );
        const taskController = new TaskController( taskRepository )

        router.use( AuthMiddleware.validateJWT )
        //Definir las rutas
        router.post('/', taskController.getAllTasks);
        router.post('/task/:id', taskController.getTaskById);
        router.post('/create', taskController.createTask);
        router.put('/update/:id', taskController.updateTask);
        router.put('/delete/:id', taskController.deleteTask);

        return router;

    }



}

