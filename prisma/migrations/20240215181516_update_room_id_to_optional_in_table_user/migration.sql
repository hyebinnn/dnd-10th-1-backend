-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roomId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `roomId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
