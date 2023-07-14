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
		const avlexiste = await prisma.avaliacao.findFirst({
			where:{
				AND:{
                    usuarioId: req.body.usuario,
                    jogoId: req.body.jogo
                }
			}
		})
		console.log(avlexiste)
		if(avlexiste == null){
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
			res.json({
				data: avaliacao,
				msg: "Avaliação criada com sucesso"
			})
		}

		else{
			const avaliacao = await prisma.avaliacao.update({
				where:{
					id: avlexiste.id
				},
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
			res.json({
				data: avaliacao,
				msg: "Avaliação alterada com sucesso"
			})
		}

		atualizaNotas(req.body.jogo)

	}catch(error){
		console.error(error);
		res.status(500).json({ error: "Erro na criação ou alteração de avaliação"});
	}
}

// Obter todas as avaliações de um usuário específico
export const getAvaliacoesUsuario = async (req, res) => {
	try{
        const avaliacoes = await prisma.avaliacao.findMany({
            where:{
                AND:{
                    status: req.body.status,
                    usuarioId: parseInt(req.params.usuarioId)
                }
            }
        })

		res.json({
            data: avaliacoes,
            msg: "Usuários retornados com sucesso"
        })

	
}
catch (error) {
	console.error(error);
	res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }
}
  
// Obter todas as avaliações de todos os usuários //function para calcular media

export const getEstatisticasUsuario = async (req, res) => {
	try{
        const qtdJogando = await prisma.avaliacao.count({
				where:{
					AND:{
					status: "jogando",
					usuarioId: parseInt(req.params.usuarioId)
				}
				}
        })
		const qtdCompletos = await prisma.avaliacao.count({
			where:{
				AND:{
				status: "completo",
				usuarioId: parseInt(req.params.usuarioId)
			}
			}
		})
		const qtdQuerojogar = await prisma.avaliacao.count({
			where:{
				AND:{
				status: "quero jogar",
				usuarioId: parseInt(req.params.usuarioId)
			}
			}
		})

		const qtdNaoAguento = await prisma.avaliacao.count({
			where:{
				AND:{
				status: "não aguento mais",
				usuarioId: parseInt(req.params.usuarioId)
			}
			}
		})

		res.json({
            jogando: qtdJogando,
            completo: qtdCompletos,
            queroJogar: qtdQuerojogar,
            naoAguento: qtdNaoAguento,
        })
	
}
catch (error) {
	console.error(error);
	res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
}
  

export const removerAvaliacao = async (req, res) => {
	const avalicaoDeletada = await prisma.avaliacao.deleteMany({
        where: {
            id: parseInt(req.params.avaliacaoId)
        }
    })

    res.json({
        msg: "Avaliação removida com sucesso"
    })
}



