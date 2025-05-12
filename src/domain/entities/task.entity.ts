
import { CustomError } from "../errors/custom.errors";

type Status = 'PENDING' | 'ACTIVE' | 'DONE'

export class TaskEntity {


    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly active: boolean,
        public readonly status: Status,
        public readonly createdAt: Date,
        public readonly lastStatusChanged: Date,
        public readonly progress: number,
        public readonly usuarioId: string,
        public readonly categoriaId: string,
        public readonly subtareas: any[] = [],
        public readonly description?: string,
    ){}

    static isValidStatus(status: string): Boolean {

        const allowedStatus: Status[] = ['PENDING', 'ACTIVE', 'DONE'];
        return allowedStatus.includes(status as Status)

    }

    static fromPrisma( obj: { [key:string]: any }  ){

        const { 
            id,
            title,
            description,
            active,
            status,
            createdAt,
            lastStatusChanged,
            progress,
            usuarioId,
            categoriaId,
            subtareas,
         } = obj;

        if( !id ) throw CustomError.badRequest('Missing id');
        if( !title ) throw CustomError.badRequest('Missing title');    
        if( !this.isValidStatus( status ) ) throw CustomError.badRequest('invalid status')
        
        let newStatusChaned;
        if (lastStatusChanged){
            newStatusChaned = new Date( lastStatusChanged );
            if( isNaN( newStatusChaned.getTime() ) ){
                throw 'lastStatusChanged is not a valid date'
            }
        }

        if (isNaN(progress)) throw CustomError.badRequest('Progress must be a number');



        return new TaskEntity( id, title, active, status, createdAt, lastStatusChanged, progress, usuarioId, categoriaId, subtareas, description )
    };


    toPlainObject(){
        return {
            id: this.id,
            name: this.title,
            description: this.description,
            active: this.active,
            status: this.status,
            createdAt: this.createdAt,
            lastStatusChanged: this.lastStatusChanged,
            progress: this.progress,
            usuarioId: this.usuarioId,
            categoriaId: this.categoriaId,
            subtareas: this.subtareas //TODO: convetir cada tarea también a texto plano
        }
    }


};