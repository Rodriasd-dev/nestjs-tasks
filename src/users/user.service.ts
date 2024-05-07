import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}

    async getUsers() { 
        return this.prisma.user.findMany()
    }

    async createUser(user: CreateUserDto) {
        return this.prisma.user.create({ data: user });
    }
}
