/*
  Warnings:

  - Added the required column `userId` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `albumId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `album` ADD COLUMN `userId` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `albumId` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
