import { Uuid, Validator } from "../../../config";



type Status = 'PENDING' | 'ACTIVE' | 'DONE'


export class DeleteTaskDto {


    constructor(
        public readonly id: string,
        public readonly usuarioId: string,
        public readonly title?: string,
        public readonly description?: string,
        public readonly status?: Status,
        public readonly lastStatusChanged?: Date,
        public readonly progress?: number,
    ){}

 

    public static create( obj: {[key: string]: any} ): [string?, DeleteTaskDto?]{

        const { id, title, description, usuarioId, status, lastStatusChanged, progress } = obj;

        if(!id) return ['Missing id'];
        if(!Uuid.validateUuid( id )) return ['Id is not valid']

        
        if (!usuarioId) return ['User not identified']
        if (!Uuid.validateUuid( usuarioId )) return ['User id is not valid']


        return [undefined, new DeleteTaskDto(id, usuarioId, title, description, status, lastStatusChanged, progress)]
    };

};

