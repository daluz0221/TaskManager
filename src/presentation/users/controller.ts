import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto, UserRepository } from "../../domain";
import { Uuid } from "../../config";
import { handlerError } from "../../config/errors";



export class UserController {

    constructor(
        private readonly userRepository: UserRepository
    ){}



    public getAllUsers = (req: Request, res: Response) => {
      
        res.json("Get all users")

    };


    public registerUser = async(req: Request, res: Response) => {

        const payload = {
            id: Uuid.v4(),
            ...req.body
        } 
        
        const [ error, registerDto ] = RegisterUserDto.create( payload );
        if (error) {
            res.status(400).json({error});
            return;
        };


        try {
            const user = await this.userRepository.registerUser( registerDto );
            res.json(user)
            
        } catch (error) {
            handlerError( error, res )
        }
        
    };


    public loginUser = async (req: Request, res: Response) => {
      
        const [error, loginUserDto] = LoginUserDto.create( req.body );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            
            const user = await this.userRepository.loginUser( loginUserDto );
            res.status(200).json({
                message: 'Ingreso exitoso',
                user
            })
            return

        } catch (error) {
            handlerError( error, res )
        }



    };

    public validateEmail = (req: Request, res: Response) => {
      
        res.json("valida email")

    };

}


