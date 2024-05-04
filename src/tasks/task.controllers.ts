import { Controller,Get,Post,Delete,Put, Patch,Req,Res,Body,Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";
import { createTask } from "./dto/create-task.dto";

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


    @Get('/:id')
    getTask(@Param('id') id:string){
        return this.taskService.getTask(parseInt(id))
    }

    @Post()
    createTask(@Body() task:createTask){
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