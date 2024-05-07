import { Module } from "@nestjs/common";
import { UserController } from "./users.controllers";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}