import { Request, Response } from "express";
import { CreateTaskDto, DeleteTaskDto, TaskRepository, UpdateTaskDto } from "../../domain";
import { handlerError } from "../../config/errors";




export class TaskController {

    constructor(
        private readonly taskRepository: TaskRepository
    ){}

    public getAllTasks = async(req: Request, res: Response) => {
         
        try {
            const categories = await this.taskRepository.getAllTasks( req.body.user.id );
            res.json(categories)
        } catch (error) {
            handlerError( error, res )
        }
    
    };

    public getTaskById = async(req: Request, res: Response) => {
          
        const id = req.params.id;

        

        try {
            const task = await this.taskRepository.getTask( id );
            
            res.json( task )
        } catch (error) {
            handlerError( error, res )
        }

    };

    public createTask = async(req: Request, res: Response) => {
          
        const taskData = {
            ...req.body,
            usuarioId: req.body.user.id
        }

         const [ error, createTaskDto ] = CreateTaskDto.create( taskData);
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const task =  await this.taskRepository.createTask( createTaskDto! )
            res.json( task );
            return;
        } catch (error) {
            handlerError( error, res )
        }
       

    };

    public updateTask = async(req: Request, res: Response) => {


        const taskData = {
            ...req.body,
            id: req.params.id,
            usuarioId: req.body.user.id
        }

        console.log({taskData});
        

        const [error, updatedTaskDto] = UpdateTaskDto.create( taskData );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const updatedTask = await this.taskRepository.updateTask( updatedTaskDto! );
            console.log({updatedTask});
            
            res.json({
                status: 'ok',
                updatedTask
            })
        } catch (error) {
            handlerError( error, res )
        }


    };

    public deleteTask = async(req: Request, res: Response) => {
        const taskData = {
            ...req.body,
            id: req.params.id,
            usuarioId: req.body.user.id
        }

        console.log({taskData});
        

        const [error, deleteTaskDto] = DeleteTaskDto.create( taskData );
        if (error) {
            res.status(400).json({error});
            return;
        };

        try {
            const deleteTask = await this.taskRepository.deleteTask( deleteTaskDto! );
            console.log({updatedTask: deleteTask});
            
            res.json({
                status: 'ok',
                deleteTask
            })
        } catch (error) {
            handlerError( error, res )
        }

    };

}


