import { v4 as uuidv4, validate as isUUID } from "uuid";



export class Uuid {

    static v4(){
        return uuidv4();
    };

    static validateUuid( id: string ){
        return isUUID( id );
    };

}
