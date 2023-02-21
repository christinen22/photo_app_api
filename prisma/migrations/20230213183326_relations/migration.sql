/*
  Warnings:

  - Made the column `user_id` on table `album` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `Album_user_id_fkey`;

-- AlterTable
ALTER TABLE `album` MODIFY `user_id` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
