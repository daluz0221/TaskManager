import { CreateSubTaskDto } from "../dtos/subtasks/create-subtak.dto";
import { DeleteSubTaskDto } from "../dtos/subtasks/delete-subtask.dto";
import { UpdateSubTaskDto } from "../dtos/subtasks/update-subtask.dto";
import { SubTaskEntity } from "../entities/subtask.entity";




export abstract class SubTaskDatasource {

    abstract getAllSubTasks( userId: string ): Promise<SubTaskEntity[]>
    abstract createSubTask( createSubTaskDto: CreateSubTaskDto ): Promise<SubTaskEntity>
    abstract updateSubTask( updateSubTaskDto: UpdateSubTaskDto ): Promise<SubTaskEntity>
    abstract deleteSubTask( deleteSubTaskDto: DeleteSubTaskDto ): Promise<SubTaskEntity>
    abstract getSubTask( id: string ): Promise<SubTaskEntity>

}