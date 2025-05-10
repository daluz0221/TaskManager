




export class CategoryEntity {


    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly usuarioId: string,
        public readonly tareas: any[] = []
    ){}

    static fromPrisma( obj: { [key:string]: any }  ): CategoryEntity{

        const { id, name, usuarioId, tareas } = obj;


        return new CategoryEntity( id, name, usuarioId, tareas )
    };


    toPlainObject(){
        return {
            id: this.id,
            name: this.name,
            usuarioId: this.usuarioId,
            tareas: this.tareas //TODO: convetir cada tarea también a texto plano
        }
    }


};