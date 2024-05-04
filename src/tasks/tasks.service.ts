import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{
    
    private tasks = [

    ]
    getTasks(){
        return this.tasks
    }

    createTask(task:any){
        this.tasks.push({
            ...task,
            id:this.tasks.length + 1
        })

        return task
    }

    deleteTask(){

    }

    updateTask(){

    }

    updateStatusTask(){

    }
}