



export class DeleteCategoryDto {

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly active?: boolean,
    ){}

    get values(){

        const returnObj: {[key:string]: any} = {
            active: false
        };

        return returnObj

    };


    static create( obj: {[key:string]: any} ): [string?, DeleteCategoryDto?] {

        const { id, name, active } = obj;

        


        return [undefined, new DeleteCategoryDto( id, name, active )]
    };


};