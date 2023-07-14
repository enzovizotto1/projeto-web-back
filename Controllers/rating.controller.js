// avaliacaoController.js
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function atualizaNotas (idJogo){
	try {
		const result = await prisma.avaliacao.aggregate({
			where:{
				jogoId: idJogo
			},
			_avg: {
				nota: true
			}
		});

		console.log(result._avg.nota)
		const media = result._avg.nota;

		const jogo = await prisma.jogo.update({
			where:{
				id: idJogo
			},
			data:{
				nota: media
			}
		})
	

		} catch (error) {
			console.error(error);
		}
  };

export const adicionarAvaliacao = async (req, res) => {
	try{
		const avaliacao = await prisma.avaliacao.create({
			data: {
				nota: req.body.nota,
				status: req.body.status,
				usuario: {
					connect: {
						id: req.body.usuario
					}
				},
				jogo: {
					connect: {
						id: req.body.jogo
					}
				}
			}
		})

		atualizaNotas(req.body.jogo)

		res.json({
			data: avaliacao,
			msg: "Avaliação criada com sucesso"
		})

	}catch(error){
		console.error(error);
		res.status(500).json({ error: "Erro"});
	}
}

// Obter todas as avaliações de um usuário específico
export const getAvaliacoesUsuario = async (req, res) => {
	
};
  
// Obter todas as avaliações de todos os usuários //function para calcular media
export const getTodasAvaliacoes = async (req, res) => {

};


export const atualizarAvaliacao = async (req, res) => {

};


export const removerAvaliacao = async (req, res) => {

}
