import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {

    private users  = [
        
    ]

    GetUser(){
        return this.users
    }

    CreateUser(user:CreateUserDto){
        
        const existEmailUser = this.users.find(value => value.email == user.email)
        const exisUsername = this.users.find(value => value.email == user.username)

        if (existEmailUser){
            throw new ConflictException(`El email ${user.email} ya existe.`)
        }

        if (exisUsername){
            throw new ConflictException(`El username ${user.username} ya existe.`)
        }

        return this.users.push(user)
    }

    FindUser(id:number){
        const user = this.users.find(user => user.id == id)

        if(!user) {
            throw new NotFoundException(`User no encontrado`)
        }

        return user
    }


}