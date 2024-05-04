import { Controller,Get,Post,Delete,Put, Patch,Req,Res,Body,Param, Query,UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService:TasksService) {}

    @Get()
    getAllTask(@Query() query:any,@Req() _request:Request,@Res() response:Response) {
        console.log(query);
        
        return response.status(200).json(this.taskService.getTasks())

    }

    @Get('/:id')
    getTask(@Param('id') id:string){
        return this.taskService.getTask(parseInt(id))
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task:CreateTaskDto){
        return this.taskService.createTask(task)
    }

    @Delete()
    deleteTasks(){
        return this.taskService.deleteTask()
    }

    @Put()
    updateTasks(@Body() task:UpdateTaskDto){
        return this.taskService.updateTask(task)
    }

    @Patch()
    updateTasksStatus(){
        return this.taskService.updateStatusTask()
    }
}