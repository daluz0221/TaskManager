import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { CategoryRoutes } from "./categories/routes";
import { TaskRoutes } from "./Tasks/routes";
import { SubTaskRoutes } from "./subTasks/routes";






export class AppRoutes {


    static get routes(): Router {

        const router = Router();


        router.use('/api/users', UserRoutes.routes );
        router.use('/api/categories', CategoryRoutes.routes );
        router.use('/api/tasks', TaskRoutes.routes );
        router.use('/api/subtasks', SubTaskRoutes.routes );

        return router;

    }


}