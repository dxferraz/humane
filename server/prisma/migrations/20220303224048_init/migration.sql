/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `UsersOnChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `UsersOnChatRoom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `UsersOnChatRoom` DROP COLUMN `assignedAt`,
    DROP COLUMN `assignedBy`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
