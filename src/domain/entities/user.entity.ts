


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


}

