import { Uuid, Validator } from "../../../config";



type Status = 'PENDING' | 'ACTIVE' | 'DONE'


export class CreateTaskDto {


    constructor(
        public readonly title: string,
        public readonly usuarioId: string,
        public readonly categoriaId: string,
        public readonly status: Status,
        public readonly progress: number,
        public readonly description?: string,
    ){}

    public static create( obj: {[key: string]: any} ): [string?, CreateTaskDto?]{

        const { title, description, usuarioId, categoriaId } = obj;

        if (!usuarioId) return ['User not identified']
        if (!Uuid.validateUuid( usuarioId )) return ['User id is not valid']

        if (!categoriaId) return ['Category id is required']
        if (!Uuid.validateUuid( categoriaId )) return ['Category id is not valid']

        if (!title) return ['Missing title']
        if (title.length > 20) return ['Title is too long']

        

        return [undefined, new CreateTaskDto(title, usuarioId, categoriaId, 'PENDING', 0, description)]
    };

};

