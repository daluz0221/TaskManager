import { Validator } from "../../../config";



export class LoginUserDto {

    private constructor(
        public readonly email: string,
        public readonly password: string
    ){}

    static create( obj: { [key: string]: any }  ): [ string?, LoginUserDto? ]{

        const { email, password } = obj;

        if( !email ) return ['Missing email']
        if( !Validator.validateEmail( email ) ) return ['Email is not valid']

        if( !password ) return ['Missing password']

        return [ undefined, new LoginUserDto(email, password) ]
    };

};
