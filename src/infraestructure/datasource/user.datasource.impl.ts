import { bcryptAdatper, JwtAdapter } from "../../config";
import { prisma } from "../../data/postgresql";
import { CustomError, LoginUserDto, RegisterUserDto, UserDatasource, UserEntity } from "../../domain";





export class UserDatasourceImpl implements UserDatasource {


    getAllUsers(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    };

    private async findUserById( email: string ): Promise<Boolean>{

        

        try {
            const userExists = await prisma.usuario.findFirst({
                where: {
                    email
                }
            });

            if(userExists) return true
            
            return false
        } catch (error) {
            return false
        }

    }

    async registerUser( registerUserDto: RegisterUserDto ): Promise<UserEntity> {
  
        
        const registerUser = UserEntity.registerUser( registerUserDto );

        const userExists = await this.findUserById( registerUser.email );

        console.log(userExists);
        

        if( userExists ){
            throw CustomError.badRequest('User already exists')
        }

        const { password, ...registerU } = registerUser

        const hashedPassword = bcryptAdatper.hash( password );

        try {
            await prisma.usuario.create({
                data: {
                    password: hashedPassword,
                    ...registerU
                }
            })

            
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

        const successUserRegister = {
            password: hashedPassword,
            ...registerU
        }
        return successUserRegister
    };


    async loginUser(loginUser: LoginUserDto){

        const { email, password } = loginUser;
        
        const userExists = await this.findUserById( email );

        if( !userExists ) {
            throw CustomError.notFound('User not found')
        };

        const user = await prisma.usuario.findFirst({
            where: {
                email
            }
        });

        const passwordMatch = bcryptAdatper.compare( password, user!.password );
        const {password: pss, ...userEntity} = UserEntity.loginUser( user! )
        console.log(user);
        
        if ( !passwordMatch ){
            throw CustomError.badRequest('email or password wrong')
        };

        const token = await JwtAdapter.generateToken({
            id: user!.id
        });

        if (!token){
            throw CustomError.internalServer('Error while creating jwt')
        };

        return {
            userEntity,
            token
        }


    };


    updateUser(updateUser: any): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    };


    deleteUser(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    };

}