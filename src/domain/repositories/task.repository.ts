import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { DeleteTaskDto } from "../dtos/tasks/delete-task.dto";
import { UpdateTaskDto } from "../dtos/tasks/update-task.dto";
import { TaskEntity } from "../entities/task.entity";




export abstract class TaskRepository {

    abstract getAllTasks( userId: string ): Promise<TaskEntity[]>
    abstract createTask( createTaskDto: CreateTaskDto ): Promise<TaskEntity>
    abstract updateTask( updateTaskDto: UpdateTaskDto ): Promise<TaskEntity>
    abstract deleteTask( deleteTaskDto: DeleteTaskDto ): Promise<TaskEntity>
    abstract getTask( id: string ): Promise<TaskEntity>
}