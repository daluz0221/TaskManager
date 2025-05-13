import { Request, Response } from "express";
import { CreateSubTaskDto, DeleteSubTaskDto, SubTaskRepository, UpdateSubTaskDto } from "../../domain";
import { handlerError } from "../../config/errors";




export class SubTaskController {

    constructor(
        private readonly subTaskRepository: SubTaskRepository
    ){}


    public getSubTaskById = async(req: Request, res: Response) => {
        
        const id = req.params.id;

        try {
            const subTask = await this.subTaskRepository.getSubTask( id );
            
            res.json( subTask )
        } catch (error) {
            handlerError( error, res )
        }
    
    };

    public getAllSubTasks = async(req: Request, res: Response) => {
          
        try {
            const subTasks = await this.subTaskRepository.getAllSubTasks( req.body.user.id );
            res.json( subTasks )
        } catch (error) {
            handlerError( error, res )
        }
    
    
    };


    public createSubTask = async(req: Request, res: Response) => {
          
       const taskData = {
            ...req.body,
            usuarioId: req.body.user.id
        }

        const [ error, createSubTaskDto ] = CreateSubTaskDto.create( taskData );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const subTask =  await this.subTaskRepository.createSubTask( createSubTaskDto! )
            res.json( subTask );
            return;
        } catch (error) {
            handlerError( error, res )
        }
              
    };

    public updateSubTask = async(req: Request, res: Response) => {
          
        const subTaskData = {
            ...req.body,
            id: req.params.id,
            usuarioId: req.body.user.id
        }

        console.log({subTaskData});
        

        const [error, updatedSubTaskDto] = UpdateSubTaskDto.create( subTaskData );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const updatedSubTask = await this.subTaskRepository.updateSubTask( updatedSubTaskDto! );
            console.log({updatedSubTask});
            
            res.json({
                status: 'ok',
                updatedSubTask
            })
        } catch (error) {
            handlerError( error, res )
        };
        

    };

    public deleteSubTask = async(req: Request, res: Response) => {
          
        const subTaskData = {
            ...req.body,
            id: req.params.id,
            usuarioId: req.body.user.id
        }

        console.log({subTaskData});
        

        const [error, deleteSubTaskDto] = DeleteSubTaskDto.create( subTaskData );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const deleteSubTask = await this.subTaskRepository.deleteSubTask( deleteSubTaskDto! );
            console.log({deleteSubTask});
            
            res.json({
                status: 'ok',
                deleteSubTask
            })
        } catch (error) {
            handlerError( error, res )
        }

    };

}


