-- DropForeignKey
ALTER TABLE `Donation` DROP FOREIGN KEY `Donation_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `MissingPerson` DROP FOREIGN KEY `MissingPerson_reporterId_fkey`;

-- DropForeignKey
ALTER TABLE `Necessity` DROP FOREIGN KEY `Necessity_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UsersOnChatRoom` DROP FOREIGN KEY `UsersOnChatRoom_chatRoomId_fkey`;

-- DropForeignKey
ALTER TABLE `UsersOnChatRoom` DROP FOREIGN KEY `UsersOnChatRoom_userId_fkey`;

-- AlterTable
ALTER TABLE `MissingPerson` MODIFY `eyeColor` ENUM('GREEN', 'HAZEL', 'BLUE', 'BROWN', 'GREYOROTHER') NULL,
    MODIFY `hairColor` ENUM('BALCK', 'BROWN', 'RED', 'BLOND', 'GRAY', 'WHITE', 'OTHER') NULL;

-- AddForeignKey
ALTER TABLE `MissingPerson` ADD CONSTRAINT `MissingPerson_reporterId_fkey` FOREIGN KEY (`reporterId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersOnChatRoom` ADD CONSTRAINT `UsersOnChatRoom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersOnChatRoom` ADD CONSTRAINT `UsersOnChatRoom_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `ChatRoom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donation` ADD CONSTRAINT `Donation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Necessity` ADD CONSTRAINT `Necessity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
