


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

    public static convertUser( obj: { [key:string]: any } ): UserEntity{

        const { id, username, email, password, createdAt, sendNotifications, emailValidated, timeBeforeNotification } = {...obj}; 
        
        const createdAtEntity = createdAt ? createdAt : new Date();
        const sendNotificationsEntity = sendNotifications ? sendNotifications : false;
        const emailValidatedEntity = emailValidated ? emailValidated : false;
        const timeBeforeNotificationEntity = timeBeforeNotification ? timeBeforeNotification : null;
        
        

        return new UserEntity( id, username, email, password, createdAtEntity, sendNotificationsEntity, emailValidatedEntity, timeBeforeNotificationEntity )

    };

    public static loginUser( obj: { [key:string]: any } ): UserEntity{

        const { id, username, email, password, createdAt, sendNotifications, emailValidated, timeBeforeNotification } = obj;

        return new UserEntity( id, username, email, password, createdAt, sendNotifications, emailValidated, timeBeforeNotification )
    };

}

