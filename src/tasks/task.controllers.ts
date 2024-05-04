import { Controller,Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController {
    taskServices: TasksService

    constructor(private taskService:TasksService) {}

    @Get('/tasks')
    getAllTask() {
        return this.taskService.getTasks()
    }

}