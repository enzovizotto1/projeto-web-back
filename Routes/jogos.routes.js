import express from 'express';
import * as jogosController  from '../Controllers/jogos.controller.js';

const router = express.Router();

jogosController.popularJogos();

// Rota para adicionar avaliação
router.get('/', jogosController.getTodosJogos);
router.get('/id/:jogoId', jogosController.getJogoPorId)
router.get('/nome', jogosController.getJogoPorNome)

export default router;

