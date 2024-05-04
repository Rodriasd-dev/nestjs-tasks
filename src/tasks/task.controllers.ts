import { Controller,Get,Post,Delete,Put, Patch } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService:TasksService) {}

    @Get()
    getAllTask() {
        return this.taskService.getTasks()
    }

    @Post()
    createTask(){
        return this.taskService.createTask()
    }

    @Delete()
    deleteTasks(){
        return this.taskService.deleteTask()
    }

    @Put()
    updateTasks(){
        return this.taskService.updateTask()
    }

    @Patch()
    updateTasksStatus(){
        return this.taskService.updateStatusTask()
    }
}