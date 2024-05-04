import { Controller,Get,Post,Delete,Put, Patch,Req,Res,Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService:TasksService) {}

    @Get()
    getAllTask(@Req() _request:Request,@Res() response:Response) {
        try {
            return response.status(200).json(this.taskService.getTasks())
        } catch (error) {
            return response.sendStatus(500)
        } 
    }


    @Post()
    createTask(@Body() task:any){
        return this.taskService.createTask(task)
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