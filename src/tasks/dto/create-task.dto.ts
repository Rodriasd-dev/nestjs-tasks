import { IsString,IsBoolean, MinLength, MaxLength } from "class-validator"

export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    @MaxLength(20)
    title: string

    @IsBoolean()
    status: boolean
}