import { Uuid } from "../../config";
import { prisma } from "../../data/postgresql";
import { CreateTaskDto, CustomError, DeleteTaskDto, TaskDatasource, TaskEntity, UpdateTaskDto } from "../../domain";








export class TaskDatasourceImpl implements TaskDatasource {
    
    private async findTaskById( id: string, userId: string ){
    
        try {
            const taskExists = await prisma.tarea.findUnique({
                where: {
                    id,
                    usuarioId: userId,
                }
            });

            
            return taskExists
        } catch (error) {
            console.log(`${error}`);
            return;
        }


    };

    async getTask(id: string): Promise<TaskEntity> {
        try {
            const taskExists = await prisma.tarea.findUnique({
                where: {
                    id
                }
            });

            if(!taskExists) throw CustomError.notFound('task not found')

            
            return TaskEntity.fromPrisma( taskExists! )
        } catch (error) {
            throw CustomError.notFound('Task not found')
        }

    }


    
    async getAllTasks(userId: string): Promise<TaskEntity[]> {
        try {
            const allTasks = await prisma.tarea.findMany({
                where: {
                    usuarioId: userId,
                    active: true
                }
            });
            
            return allTasks.map( task => TaskEntity.fromPrisma( task ) )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    };

    async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {

        const objTask = {
            ...createTaskDto,
            id: Uuid.v4(),
            lastStatusChanged: new Date()
        }

       
        const existsTask = await prisma.tarea.findFirst({
            where: {
                title: objTask.title,
                usuarioId: objTask.usuarioId
            }
        });

        if (existsTask){
            throw CustomError.badRequest('Task already exists')
        };

        try {

            const { categoriaId, ...taskToCategory } = objTask;
            
            const categoria = await prisma.categoria.findUnique({
                where:{
                    id: categoriaId 
                },
                select: {
                    usuarioId: true
                }
            });

            if(!categoria || categoria.usuarioId !== taskToCategory.usuarioId){
                throw CustomError.forbidden("Category does not belong to the current user")
            }

            await prisma.categoria.update({
                where: {
                    id: categoriaId
                },
                data: {
                    tareas: {
                        create: taskToCategory
                    }
                }
            })

        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

        return  TaskEntity.fromPrisma( objTask );
        
    }


    async updateTask(updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
      
        const task = await this.findTaskById( updateTaskDto.id, updateTaskDto.usuarioId );
        if (!task){
            throw CustomError.notFound('Task not found')
        };

        try {
            const updatedTask = await prisma.tarea.update({
                where: {
                    id: updateTaskDto.id
                },
                data: updateTaskDto!.values
            });
            return TaskEntity.fromPrisma( updatedTask )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }

    };


    async deleteTask(deleteTaskDto: DeleteTaskDto): Promise<TaskEntity> {
      
        const task = await this.findTaskById( deleteTaskDto.id, deleteTaskDto.usuarioId );
        if (!task){
            throw CustomError.notFound('Task not found')
        };
      
        try {
            const deleteTask = await prisma.tarea.update({
                where: {
                    id: deleteTaskDto.id,
                    usuarioId: deleteTaskDto.usuarioId
                },
                data: {
                    active: false
                }
            });
            return TaskEntity.fromPrisma( deleteTask )
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    };
};




