/*
  Warnings:

  - Added the required column `albumId` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `photo` ADD COLUMN `albumId` INTEGER UNSIGNED NOT NULL;
