/*
  Warnings:

  - You are about to drop the column `jogoId` on the `Avaliacao` table. All the data in the column will be lost.
  - You are about to drop the `Jogo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JogoToUsuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jogo` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Avaliacao` DROP FOREIGN KEY `Avaliacao_jogoId_fkey`;

-- DropForeignKey
ALTER TABLE `_JogoToUsuario` DROP FOREIGN KEY `_JogoToUsuario_A_fkey`;

-- DropForeignKey
ALTER TABLE `_JogoToUsuario` DROP FOREIGN KEY `_JogoToUsuario_B_fkey`;

-- AlterTable
ALTER TABLE `Avaliacao` DROP COLUMN `jogoId`,
    ADD COLUMN `jogo` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `Jogo`;

-- DropTable
DROP TABLE `_JogoToUsuario`;
