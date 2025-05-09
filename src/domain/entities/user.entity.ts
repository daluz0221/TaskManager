


export class UserEntity {


    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string,
        public createdAt: Date,
        public sendNotifications: boolean,
        public emailValidated: boolean,
        public timeBeforeNotification?: number,
    ){}

    public static registerUser( obj: { [key:string]: any } ): UserEntity{

        const { id, username, email, password } = {...obj}; 
        console.log({id});
        
        

        return new UserEntity( id, username, email, password, new Date(), false, false )

    };

}

