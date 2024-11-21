import { Module } from '@nestjs/common';
import { PrismaService } from './database/prismaService';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
