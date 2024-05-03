import { Module } from "@nestjs/common";
import { TaskController } from "./task.controllers";

@Module({
    controllers: [TaskController]
})
export class TaskModule{}