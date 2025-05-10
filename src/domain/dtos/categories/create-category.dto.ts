import { Uuid, Validator } from "../../../config";




export class CreateCategoryDto {

    constructor(
        public readonly name: string,
        public readonly usuarioId: string,
    ){}

    public static create( obj: { [key: string]: any } ): [string?, CreateCategoryDto?]{

        const { name, userId } = obj;


        if(!name) return ['Missing name'];
        if( !Validator.isName( name ) ) return['Username can only contain letters and numbers'];

        if(!userId) return ['Usuario no identificado'];
        if(!Uuid.validateUuid( userId )) return ['Token inválido'];
        
  

        return [undefined, new CreateCategoryDto( name, userId )]
    }

};

