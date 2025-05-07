import { Router } from "express";
import { UserController } from "./controller";





export class UserRoutes {


    static get routes(): Router {


        const router = Router();

        const userController = new UserController();


        //Definir las rutas
        router.post('/login', userController.loginUser);
        router.get('/register',  userController.registerUser );

        return router;

    }



}

