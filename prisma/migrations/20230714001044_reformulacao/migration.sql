/*
  Warnings:

  - You are about to drop the column `jogo` on the `Avaliacao` table. All the data in the column will be lost.
  - Added the required column `jogoId` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Avaliacao` DROP COLUMN `jogo`,
    ADD COLUMN `jogoId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Jogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `foto` VARCHAR(255) NOT NULL,
    `sinopse` VARCHAR(255) NOT NULL,
    `nota` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `Avaliacao_jogoId_fkey` FOREIGN KEY (`jogoId`) REFERENCES `Jogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
