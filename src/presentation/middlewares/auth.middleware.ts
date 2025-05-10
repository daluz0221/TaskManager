import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { prisma } from "../../data/postgresql";
import { UserEntity } from "../../domain";






export class AuthMiddleware {


    static async validateJWT(req:Request, res: Response, next: NextFunction){

        const authorization = req.header('Authorization');

        if ( !authorization ) {
            res.status(401).json({error: 'No token provided'});
            return;
        };

        if ( !authorization.startsWith('Bearer ') ) {
            res.status(401).json({error: 'invalid bearer token'});
            return;
        };

        const token = authorization.split(' ').at(1) || '';

        try {
            
            const payload = await JwtAdapter.validateToken<{id:string}>( token );

            
            if ( !payload ){
                res.status(401).json({error: 'Invalid token'});
                return;
            };
            console.log(payload.id);
            

            const user = await prisma.usuario.findFirst({
                where:{
                    id: payload.id
                }
            });

            

            if (!user) {
                res.status(401).json({error: 'Invalid token - User'});
                return;
            };

            req.body.user = UserEntity.convertUser(user);
            

            next();

        } catch (error) {
            console.log({error, message: 'from user middleware'});
            res.status(500).json({error: 'Internal server error'})
        }

    };

};

