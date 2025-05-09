import { UserRepository, UserEntity, RegisterUserDto } from "../../domain";





export class UserRepositoryImpl implements UserRepository {

    constructor(
        private readonly datasource: UserRepository
    ){}
    

    getAllUsers(): Promise<UserEntity[]> {
        return this.datasource.getAllUsers();
    }

    registerUser(registerUser: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.registerUser( registerUser );
    }

    loginUser(loginUser: any): Promise<UserEntity> {
        return this.datasource.loginUser( loginUser );
    }
    
    updateUser(updateUser: any): Promise<UserEntity> {
        return this.datasource.updateUser( updateUser );
    }

    deleteUser(id: number): Promise<UserEntity> {
        return this.datasource.deleteUser( id );
    }

}

