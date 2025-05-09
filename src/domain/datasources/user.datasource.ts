import { UserEntity } from "../entities/user.entity";





export abstract class UserDatasource {

    abstract getAllUsers(): Promise<UserEntity[]>
    abstract registerUser( registerUser: any ): Promise<UserEntity>
    abstract loginUser( loginUser: any ): Promise<UserEntity>
    abstract updateUser( updateUser:any ): Promise<UserEntity>
    abstract deleteUser( id: number ): Promise<UserEntity>

}