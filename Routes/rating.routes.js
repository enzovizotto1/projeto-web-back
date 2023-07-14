
import express from 'express';
import * as ratingController  from '../Controllers/rating.controller.js';

const router = express.Router();

// Rota para adicionar avaliação
router.post('/', ratingController.adicionarAvaliacao);
router.get('/nota/:usuarioId', ratingController.getAvaliacoesUsuario);
router.get('/estatistica/:usuarioId', ratingController.getEstatisticasUsuario);
router.delete('/:avaliacaoId', ratingController.removerAvaliacao);

export default router;

