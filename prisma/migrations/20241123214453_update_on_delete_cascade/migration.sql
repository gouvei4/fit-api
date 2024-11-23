-- DropForeignKey
ALTER TABLE `mealentry` DROP FOREIGN KEY `MealEntry_mealId_fkey`;

-- AddForeignKey
ALTER TABLE `MealEntry` ADD CONSTRAINT `MealEntry_mealId_fkey` FOREIGN KEY (`mealId`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
