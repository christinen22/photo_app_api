/*
  Warnings:

  - You are about to drop the column `albumId` on the `photo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Photo_albumId_fkey` ON `photo`;

-- AlterTable
ALTER TABLE `photo` DROP COLUMN `albumId`;
