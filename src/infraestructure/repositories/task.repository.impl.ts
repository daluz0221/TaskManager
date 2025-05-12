
import { CreateTaskDto, DeleteTaskDto, TaskEntity, TaskRepository, UpdateTaskDto } from "../../domain";






export class TaskRepositoryImpl implements TaskRepository {

    constructor(
        private readonly datasource: TaskRepository
    ){}


    getTask(id: string): Promise<TaskEntity> {
        return this.datasource.getTask( id );
    };
    
    getAllTasks(userId: string): Promise<TaskEntity[]> {
        return this.datasource.getAllTasks( userId );
    };
    
    createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
        return this.datasource.createTask( createTaskDto );
    };
    
    updateTask(updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
        return this.datasource.updateTask( updateTaskDto );
    };
    
    deleteTask(deleteTaskDto: DeleteTaskDto): Promise<TaskEntity> {
        return this.datasource.deleteTask( deleteTaskDto );
    };

};