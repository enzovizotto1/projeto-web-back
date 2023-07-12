/*
  Warnings:

  - You are about to drop the `Amigo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Amigo` DROP FOREIGN KEY `Amigo_amigoId_fkey`;

-- DropTable
DROP TABLE `Amigo`;

-- CreateTable
CREATE TABLE `_amigos` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_amigos_AB_unique`(`A`, `B`),
    INDEX `_amigos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_amigos` ADD CONSTRAINT `_amigos_A_fkey` FOREIGN KEY (`A`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_amigos` ADD CONSTRAINT `_amigos_B_fkey` FOREIGN KEY (`B`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
