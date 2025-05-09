import { UserEntity } from "../entities/user.entity";



export abstract class UserRepository {

    abstract getAllUsers(): Promise<UserEntity[]>
    abstract registerUser( registerUser: any ): Promise<UserEntity>
    abstract loginUser( loginUser: any ): Promise<{}>
    abstract updateUser( updateUser:any ): Promise<UserEntity>
    abstract deleteUser( id: number ): Promise<UserEntity>

}