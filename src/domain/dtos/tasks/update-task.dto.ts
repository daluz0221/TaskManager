import { Uuid, Validator } from "../../../config";



type Status = 'PENDING' | 'ACTIVE' | 'DONE'


export class UpdateTaskDto {


    constructor(
        public readonly id: string,
        public readonly usuarioId: string,
        public readonly title?: string,
        public readonly description?: string,
        public readonly status?: Status,
        public readonly lastStatusChanged?: Date,
        public readonly progress?: number,
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

        if ( this.progress ){
            objReturn.progress = this.progress
        };


        return objReturn;

    };

    public static create( obj: {[key: string]: any} ): [string?, UpdateTaskDto?]{

        const { id, title, description, usuarioId, status, lastStatusChanged, progress } = obj;

        if(!id) return ['Missing id'];
        if(!Uuid.validateUuid( id )) return ['Id is not valid']

        
        if (!usuarioId) return ['User not identified']
        if (!Uuid.validateUuid( usuarioId )) return ['User id is not valid']


        return [undefined, new UpdateTaskDto(id, usuarioId, title, description, status, lastStatusChanged, progress)]
    };

};

