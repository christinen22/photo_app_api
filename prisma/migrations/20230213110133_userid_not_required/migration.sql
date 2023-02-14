-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `Album_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `Photo_user_id_fkey`;

-- AlterTable
ALTER TABLE `album` MODIFY `user_id` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `photo` MODIFY `user_id` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
