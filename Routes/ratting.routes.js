
import express from 'express';
import * as rattingController  from './controllers/rattingController.js';

const router = express.Router();

// Rota para adicionar avaliação
router.post('/avaliacao', rattingController.adicionarAvaliacao);
router.get('/avaliacao', rattingController.getTodasAvaliacoes);
router.get('/avaliacao/:appid', rattingController.getAvaliacoesUsuario);
router.put('/avaliacao', rattingController.atualizarAvaliacao);
router.delete('/avaliacao', rattingController.removerAvaliacao);

export default router;

