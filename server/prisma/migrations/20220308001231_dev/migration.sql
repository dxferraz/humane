/*
  Warnings:

  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedAt` on the `User` table. All the data in the column will be lost.
  - Made the column `chatRoomId` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `eyeColor` to the `MissingPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairColor` to the `MissingPerson` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_chatRoomId_fkey`;

-- AlterTable
ALTER TABLE `Image` ADD COLUMN `donationId` INTEGER NULL,
    ADD COLUMN `necessityId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Message` MODIFY `chatRoomId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `MissingPerson` ADD COLUMN `disappearanceDay` DATETIME(3) NULL,
    ADD COLUMN `eyeColor` ENUM('GREEN', 'HAZEL', 'BLUE', 'BROWN', 'GREYOROTHER') NOT NULL,
    ADD COLUMN `hairColor` ENUM('BALCK', 'BROWN', 'RED', 'BLOND', 'GRAY', 'WHITE', 'OTHER') NOT NULL,
    MODIFY `age` INTEGER NULL,
    MODIFY `height` DOUBLE NULL,
    MODIFY `skin` ENUM('PALE', 'WHITE', 'TANNED', 'BROWN', 'BLACK') NULL,
    MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `verified`,
    DROP COLUMN `verifiedAt`,
    ADD COLUMN `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `emailVerifiedAt` DATETIME(3) NULL,
    ADD COLUMN `profileVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `profileVerifiedAt` DATETIME(3) NULL,
    MODIFY `thumbnail` VARCHAR(191) NULL,
    MODIFY `birthdate` DATETIME(3) NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Donation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `timeStamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoryId` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Necessity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `timeStamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoryId` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_donationId_fkey` FOREIGN KEY (`donationId`) REFERENCES `Donation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_necessityId_fkey` FOREIGN KEY (`necessityId`) REFERENCES `Necessity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `ChatRoom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Necessity` ADD CONSTRAINT `Necessity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Necessity` ADD CONSTRAINT `Necessity_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
