import { Module } from '@nestjs/common';
import { PrismaService } from './database/prismaService';
import { DatabaseModule } from './database.module';
import { UserModule } from 'src/modules/users/infra/repositories/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
