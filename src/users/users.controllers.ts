import { Controller, Get } from "@nestjs/common";
import { UsersServices } from "./users.service";

@Controller('/user')
export class UsersControllers {

    constructor(private userService:UsersServices){}

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }
}