import { Router } from "express";





export class CategoryRoutes {


    static get routes(): Router {


        const router = Router();



        //Definir las rutas
        router.get('/');
        router.post('/');

        return router;

    }



}

