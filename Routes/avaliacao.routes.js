
import express from 'express';
import * as avaliacaoController  from '../Controllers/avaliacao.controller.js';

const router = express.Router();

// Rota para adicionar avaliação
router.post('/', avaliacaoController.adicionarAvaliacao);
router.get('/nota/:usuarioId', avaliacaoController.getAvaliacoesUsuario);
router.get('/estatistica/:usuarioId', avaliacaoController.getEstatisticasUsuario);
router.delete('/:avaliacaoId', avaliacaoController.removerAvaliacao);

export default router;

