import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controllers';
import { UsersServices } from './users.service';

@Module({
    controllers:[UsersControllers],
    providers:[UsersServices]
})
export class UsersModule {}
