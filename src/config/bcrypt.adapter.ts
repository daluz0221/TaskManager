import { compareSync, genSalt, genSaltSync, hashSync } from "bcryptjs";




export class bcryptAdatper {


    static hash(password: string){
        
        const salt = genSaltSync();
        return hashSync( password, salt )
    };

    static compare( password: string, hashed: string ){

        return compareSync( password, hashed )

    };


}