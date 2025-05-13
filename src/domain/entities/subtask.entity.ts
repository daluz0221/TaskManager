
import { CustomError } from "../errors/custom.errors";

type Status = 'PENDING' | 'ACTIVE' | 'DONE'

export class SubTaskEntity {


    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly active: Status,
        public readonly status: Date,
        public readonly createdAt: Date,
        public readonly lastStatusChanged: number,
        public readonly usuarioId: string,
        public readonly tareaId: string,
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
            usuarioId,
            tareaId,
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


        return new SubTaskEntity( id, title, active, status, createdAt, lastStatusChanged, usuarioId, tareaId, description )
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
            usuarioId: this.usuarioId,
            tareaId: this.tareaId,
        }
    }


};