import { Uuid, Validator } from "../../../config";



type Status = 'PENDING' | 'ACTIVE' | 'DONE'


export class UpdateSubTaskDto {


    constructor(
        public readonly id: string,
        public readonly usuarioId: string,
        public readonly title?: string,
        public readonly description?: string,
        public readonly status?: Status,
        public readonly lastStatusChanged?: Date,
    ){}

    get values(){

        const objReturn: {[key: string]: any} = {};


        if ( this.title ){
            objReturn.title = this.title
        };

        if ( this.description ){
            objReturn.description = this.description
        };

        if ( this.status ){
            objReturn.status = this.status
        };

        if ( this.lastStatusChanged ){
            objReturn.lastStatusChanged = this.lastStatusChanged
        };


        return objReturn;

    };

    public static create( obj: {[key: string]: any} ): [string?, UpdateSubTaskDto?]{

        const { id, title, description, usuarioId, status, lastStatusChanged } = obj;

        if(!id) return ['Missing id'];
        if(!Uuid.validateUuid( id )) return ['Id is not valid']

        
        if (!usuarioId) return ['User not identified']
        if (!Uuid.validateUuid( usuarioId )) return ['User id is not valid']


        return [undefined, new UpdateSubTaskDto(id, usuarioId, title, description, status, lastStatusChanged)]
    };

};

