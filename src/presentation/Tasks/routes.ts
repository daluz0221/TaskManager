import { Router } from "express";
import { TaskController } from "./controller";





export class TaskRoutes {


    static get routes(): Router {


        const router = Router();


        const taskController = new TaskController()

        //Definir las rutas
        router.get('/', taskController.getAllTasks);
        router.post('/', taskController.createTask);
        router.put('/update/:id', taskController.updateTask);
        router.put('/delete/:id', taskController.deleteTask);

        return router;

    }



}

