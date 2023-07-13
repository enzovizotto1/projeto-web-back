
import express from 'express';
import * as ratingController  from '../Controllers/rating.controller.js';

const router = express.Router();

// Rota para adicionar avaliação
router.post('', ratingController.adicionarAvaliacao);
router.get('/', ratingController.getTodasAvaliacoes);
router.get('/:appid', ratingController.getAvaliacoesUsuario);
router.put('', ratingController.atualizarAvaliacao);
router.delete('/', ratingController.removerAvaliacao);

export default router;

