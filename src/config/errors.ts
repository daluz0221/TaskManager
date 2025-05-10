import { Response } from "express";
import { CustomError } from "../domain";



export const handlerError = (error: unknown, res: Response) => {
      
    if(error instanceof CustomError){
        res.status( error.statusCode ).json({ error: error.message });
        return
    };

    console.log(`${error}`);
    
    res.status(500).json({error: 'Internal server error'})

};