import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{
    
    private tasks = [
        'Task1','Task2','Task3'
    ]
    getTasks(){
        return this.tasks
    }

    createTask(){
        return ''
    }

    deleteTask(){

    }

    updateTask(){

    }

    updateStatusTask(){
        
    }
}