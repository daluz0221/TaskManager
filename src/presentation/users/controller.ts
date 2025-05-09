import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto, UserRepository } from "../../domain";
import { Uuid } from "../../config";



export class UserController {

    constructor(
        private readonly userRepository: UserRepository
    ){}

    private handlerError = (error: unknown, res: Response) => {
      
        if(error instanceof CustomError){
            res.status( error.statusCode ).json({ error: error.message });
            return
        };

        console.log(`${error}`);
        
        res.status(500).json({error: 'Internal server error'})

    };


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

        console.log(registerDto);

        try {
            const user = await this.userRepository.registerUser( registerDto );
            res.json(user)
            
        } catch (error) {
            this.handlerError( error, res )
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
            this.handlerError( error, res )
        }



    };

    public validateEmail = (req: Request, res: Response) => {
      
        res.json("valida email")

    };

}


