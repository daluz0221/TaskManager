import { Uuid, Validator } from "../../../config";



type Status = 'PENDING' | 'ACTIVE' | 'DONE'


export class CreateSubTaskDto {


    constructor(
        public readonly title: string,
        public readonly usuarioId: string,
        public readonly tareaId: string,
        public readonly status: Status,
        public readonly description?: string
    ){}

    public static create( obj: {[key: string]: any} ): [string?, CreateSubTaskDto?]{

        const { title, description, usuarioId, tareaId } = obj;

        if (!usuarioId) return ['User not identified']
        if (!Uuid.validateUuid( usuarioId )) return ['User id is not valid']

        if (!tareaId) return ['Task id is required']
        if (!Uuid.validateUuid( tareaId )) return ['Task id is not valid']

        if (!title) return ['Missing title']
        if (title.length > 20) return ['Title is too long']

        return [undefined, new CreateSubTaskDto(title, usuarioId, tareaId, 'PENDING', description)]
    };

};
