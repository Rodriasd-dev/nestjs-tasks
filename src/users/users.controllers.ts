import { Controller, Post, Body,Res,Req, Get } from "@nestjs/common";
import { Response,Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";


@Controller('/user')
export class UserController {
    constructor(private userService:UserService){}


    @Post()
    CreateUser(@Body() user: CreateUserDto,@Req() _request: Request,@Res() response: Response) {

        return response.status(200).json(this.userService.CreateUser(user))
    }

    @Get()
    GetUsers(@Req() _request: Request, @Res() response: Response){
        
        return response.status(200).json(this.userService.GetUser())
    }

}