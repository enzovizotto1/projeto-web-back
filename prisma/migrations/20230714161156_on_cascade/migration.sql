-- DropForeignKey
ALTER TABLE `Avaliacao` DROP FOREIGN KEY `Avaliacao_jogoId_fkey`;

-- DropForeignKey
ALTER TABLE `Avaliacao` DROP FOREIGN KEY `Avaliacao_usuarioId_fkey`;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `Avaliacao_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `Avaliacao_jogoId_fkey` FOREIGN KEY (`jogoId`) REFERENCES `Jogo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
