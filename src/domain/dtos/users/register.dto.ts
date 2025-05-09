import { Uuid, Validator } from "../../../config";




export class RegisterUserDto {

    constructor(
        public readonly id: string,
        public readonly username: string,
        public readonly email: string,
        public readonly password: string,
    ){}

    public static create( obj: { [key: string]: any } ): [string?, RegisterUserDto?]{

        const { id, username, email, password } = obj;

        if( !id ) return ['Id is required to proceed']
        if( !Uuid.validateUuid( id ) ) return ['Id is not a valid uuid']

        if(!username) return ['Missing name'];
        if( !Validator.isName( username ) ) return['Username too short or too long'];
        
        if( !email ) return ['Missing email'];
        if( !Validator.validateEmail( email ) ) return ['Email is not valid'];

        if( !password ) return ['Missing password'];
        if( !Validator.isStrongPassword( password ) ) return ['Invalid Password, should contain minimun 8 characters, at least one uppercase letter, one lowercase letter, one number and one symbol'];




        return [undefined, new RegisterUserDto( id, username, email, password )]
    }

};


