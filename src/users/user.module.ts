import { Module } from "@nestjs/common";
import { UserController } from "./users.controllers";
import { UserService } from "./user.service";
import { PrimaService } from "src/prisma.service";
@Module({
    controllers: [UserController],
    providers: [UserService, PrimaService]
})
export class UserModule {}