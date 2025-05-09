import { Router } from "express";
import { UserController } from "./controller";
import { UserRepositoryImpl } from "../../infraestructure/repositories/user.repository.impl";
import { UserDatasourceImpl } from "../../infraestructure/datasource/user.datasource.impl";





export class UserRoutes {


    static get routes(): Router {


        const router = Router();

        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl( datasource );
        const userController = new UserController( userRepository );


        //Definir las rutas
        router.post('/login', userController.loginUser);
        router.post('/register',  userController.registerUser );

        router.get('/validate-email/:token', userController.validateEmail)

        return router;

    }



}

