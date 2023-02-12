/*
  Warnings:

  - You are about to drop the column `albumId` on the `photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `Album_userId_fkey`;

-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `Photo_userId_fkey`;

-- AlterTable
ALTER TABLE `album` MODIFY `userId` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `photo` DROP COLUMN `albumId`,
    MODIFY `userId` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
