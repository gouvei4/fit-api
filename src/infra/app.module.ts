import { Module } from '@nestjs/common';
import { PrismaService } from './database/prismaService';
import { DatabaseModule } from './database.module';
import { UserModule } from 'src/modules/users/infra/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { FoodModule } from 'src/modules/foods/infra/food.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, FoodModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
