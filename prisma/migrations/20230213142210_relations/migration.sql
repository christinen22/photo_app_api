-- DropForeignKey
ALTER TABLE `album` DROP FOREIGN KEY `Album_user_id_fkey`;

-- AlterTable
ALTER TABLE `album` MODIFY `user_id` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
