import { Module } from "@nestjs/common";
import { TaskController } from "./task.controllers";
import { TasksService } from "./tasks.service";

@Module({
    controllers: [TaskController],
    providers: [TasksService]
})
export class TaskModule{}