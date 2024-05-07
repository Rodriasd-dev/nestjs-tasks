import { IsString,IsEmail, MinLength } from "class-validator"

export class CreateUserDto {
    // @IsEmpty()
    @IsString()
    username: string

    // @IsEmpty()
    @IsString()
    @IsEmail()
    email: string


    // @IsEmpty()
    @MinLength(8)
    password: string
}