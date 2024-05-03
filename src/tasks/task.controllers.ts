import { Controller,Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController {
    taskServices: TasksService

    constructor(taskService:TasksService){
        this.taskServices = taskService;
    }

    @Get('/tasks')
    getAllTask() {
        return this.taskServices.getTasks();
    }

}