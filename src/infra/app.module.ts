import { Module } from '@nestjs/common';
import { PrismaService } from './database/prismaService';
import { DatabaseModule } from './database.module';
import { UserModule } from 'src/modules/users/infra/repositories/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
