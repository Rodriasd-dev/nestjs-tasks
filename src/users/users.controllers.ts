import { Controller, Get } from "@nestjs/common";
import { UsersServices } from "./users.service";

@Controller({})
export class UsersControllers {

    constructor(private userService:UsersServices){}

    @Get('/user')
    getUsers(){
        return this.userService.getUsers()
    }
}