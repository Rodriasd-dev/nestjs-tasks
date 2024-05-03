import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, UsersModule, ProjectModule, AuthModule]
})
export class AppModule {}
