/*
  Warnings:

  - You are about to drop the column `userId` on the `album` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `Album_userId_fkey`;

-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `Photo_userId_fkey`;

-- AlterTable
ALTER TABLE `album` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `photo` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
