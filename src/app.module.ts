import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [TaskModule, UserModule]
})
export class AppModule {}
