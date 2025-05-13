import { Uuid } from "../../config";
import { prisma } from "../../data/postgresql";
import { CreateSubTaskDto, CustomError, DeleteSubTaskDto, SubTaskDatasource, SubTaskEntity, UpdateSubTaskDto } from "../../domain";






export class SubTaskDatasourceImpl implements SubTaskDatasource{

    private async findSubTaskById( id: string, userId: string ){
    
        try {
            const subTaskExists = await prisma.subTarea.findUnique({
                where: {
                    id,
                    usuarioId: userId,
                }
            });

            
            return subTaskExists
        } catch (error) {
            console.log(`${error}`);
            return;
        }


    };


    async getAllSubTasks(userId: string): Promise<SubTaskEntity[]> {
        try {
            const allTasks = await prisma.subTarea.findMany({
                where: {
                    usuarioId: userId,
                    active: true
                }
            });
            
            return allTasks.map( task => SubTaskEntity.fromPrisma( task ) )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    };


    async createSubTask(createSubTaskDto: CreateSubTaskDto): Promise<SubTaskEntity> {
        
        
        const objSubTask = {
            ...createSubTaskDto,
            id: Uuid.v4(),
            lastStatusChanged: new Date()
        }

        
        const existsTask = await prisma.subTarea.findFirst({
            where: {
                title: objSubTask.title,
                usuarioId: objSubTask.usuarioId,
                active: true
            }
        });

        if (existsTask){
            throw CustomError.badRequest('subTask already exists')
        };

        try {

            const { tareaId, ...subTaskToCategory } = objSubTask;
            
            const tarea = await prisma.tarea.findUnique({
                where:{
                    id: tareaId 
                },
                select: {
                    usuarioId: true
                }
            });

            console.log({tareaUserID: tarea?.usuarioId, tareaId});
            

            if(!tarea || tarea.usuarioId !== subTaskToCategory.usuarioId){
                throw CustomError.forbidden("Task does not belong to the current user")
            }

            await prisma.tarea.update({
                where: {
                    id: tareaId
                },
                data: {
                    subtareas: {
                        create: subTaskToCategory
                    }
                }
            })

        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

        return  SubTaskEntity.fromPrisma( objSubTask );
    };
    

    async updateSubTask(updateSubTaskDto: UpdateSubTaskDto): Promise<SubTaskEntity> {
        const subTask = await this.findSubTaskById( updateSubTaskDto.id, updateSubTaskDto.usuarioId );

        if (!subTask){
            throw CustomError.notFound('Task not found')
        };

        try {
            const updatedTask = await prisma.subTarea.update({
                where: {
                    id: updateSubTaskDto.id
                },
                data: updateSubTaskDto!.values
            });
            return SubTaskEntity.fromPrisma( updatedTask )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    };


    async deleteSubTask(deleteSubTaskDto: DeleteSubTaskDto): Promise<SubTaskEntity> {
        
        const task = await this.findSubTaskById( deleteSubTaskDto.id, deleteSubTaskDto.usuarioId );
        if (!task){
            throw CustomError.notFound('Task not found')
        };
        
        try {
            const deleteTask = await prisma.subTarea.update({
                where: {
                    id: deleteSubTaskDto.id,
                    usuarioId: deleteSubTaskDto.usuarioId
                },
                data: {
                    active: false
                }
            });
            return SubTaskEntity.fromPrisma( deleteTask )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    };


    async getSubTask(id: string): Promise<SubTaskEntity> {
        try {
            const subTaskExists = await prisma.subTarea.findUnique({
                where: {
                    id
                }
            });

            if(!subTaskExists) throw CustomError.notFound('subTask not found')

            
            return SubTaskEntity.fromPrisma( subTaskExists! )
        } catch (error) {
            throw CustomError.notFound('SubTask not found')
        }
    };

};

