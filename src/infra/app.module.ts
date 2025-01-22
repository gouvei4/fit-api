import { Module } from '@nestjs/common';
import { PrismaService } from './database/prismaService';
import { DatabaseModule } from './database.module';
import { UserModule } from 'src/modules/users/infra/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { FoodModule } from 'src/modules/foods/infra/food.module';
import { MealModule } from 'src/modules/meals/infra/meal.module';
import { GoalModule } from 'src/modules/goals/infra/goal.module';
import { CarbHistoryModule } from 'src/modules/carbHistory/infra/carb.history.module';
import { CarbReportModule } from 'src/modules/reports/infra/carb.report.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    FoodModule,
    MealModule,
    GoalModule,
    CarbHistoryModule,
    CarbReportModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
