import { prisma } from "../../data/postgresql";
import { RegisterUserDto, UserDatasource, UserEntity } from "../../domain";





export class UserDatasourceImpl implements UserDatasource {


    getAllUsers(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    };


    async registerUser( registerUserDto: RegisterUserDto ): Promise<UserEntity> {
        console.log({registerUserDto, data:'data'});
        
        const registerUser = UserEntity.registerUser( registerUserDto );
        console.log({registerUser});
        

        try {
            await prisma.usuario.create({
                data: registerUser
            })

            
        } catch (error) {
            console.log({error});
        }

        return registerUser
    };


    loginUser(loginUser: any): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    };


    updateUser(updateUser: any): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    };


    deleteUser(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    };

}