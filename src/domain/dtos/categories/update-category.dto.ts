

export class UpdateCategoryDto {

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly active?: boolean,
    ){}

    get values(){

        const returnObj: {[key:string]: any} = {};

        if(this.name){
            returnObj.name = this.name
        };

        return returnObj

    };


    static create( obj: {[key:string]: any} ): [string?, UpdateCategoryDto?] {

        const { id, name } = obj;

        if(!name) return ['Missing name']


        return [undefined, new UpdateCategoryDto( id, name )]
    };


};