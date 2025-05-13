import { CreateSubTaskDto,   DeleteSubTaskDto,   SubTaskDatasource, SubTaskEntity, SubTaskRepository, UpdateSubTaskDto } from "../../domain";





export class SubTaskRepositoryImpl implements SubTaskRepository{

    constructor(
        private readonly subTaskDatasource: SubTaskDatasource
    ){}


    getAllSubTasks(userId: string): Promise<SubTaskEntity[]> {
        return this.subTaskDatasource.getAllSubTasks( userId );
    };


    createSubTask(createSubTaskDto: CreateSubTaskDto ): Promise<SubTaskEntity> {
        return this.subTaskDatasource.createSubTask( createSubTaskDto );
    };


    updateSubTask(updateSubTaskDto: UpdateSubTaskDto): Promise<SubTaskEntity> {
        return this.subTaskDatasource.updateSubTask( updateSubTaskDto );
    };


    deleteSubTask(deleteSubTaskDto: DeleteSubTaskDto): Promise<SubTaskEntity> {
        return this.subTaskDatasource.deleteSubTask( deleteSubTaskDto );
    };


    getSubTask(id: string): Promise<SubTaskEntity> {
        return this.subTaskDatasource.getSubTask( id );
    }

    

};

