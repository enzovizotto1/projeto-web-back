// avaliacaoController.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const adicionarAvaliacao = async (req, res) => {
  try {
    const { userId, nota } = req.body;

    if (nota < 0 || nota > 5 || nota % 0.5 !== 0) {
        return res.status(400).json({ error: 'Nota inválida' });
      }
  
    // Adicionar a avaliação do usuário no banco de dados
    const usuario = await prisma.usuario.create({
      where: { 
        id: userId
     },
      data: {
        avaliacao: { 
            push: nota 
        } // Adiciona a nota na lista existente
      }
    });

    res.json({ message: 'Avaliação adicionada com sucesso', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar a avaliação' });
  }
}


// Obter todas as avaliações de um usuário específico
export const getAvaliacoesUsuario = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const usuario = await prisma.usuario.findUnique({
        where: { 
          id: userId 
        },
        select: { 
          avaliacao: true 
        }
      });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json(usuario.avaliacao);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter as avaliações do usuário' });
    }
  };
  
  // Obter todas as avaliações de todos os usuários
export const getTodasAvaliacoes = async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany({
        select: { 
          id: true,
          avaliacao: true 
        }
      });
  
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter todas as avaliações' });
    }
};

export const atualizarAvaliacao = async (req, res) => {
    try {
      const { userId } = req.params;
      const { nota } = req.body;
  
      const usuario = await prisma.usuario.update({
        where: { 
          id: userId 
        },
        data: {
          avaliacao: nota
        }
      });
  
      res.json({ message: 'Avaliação atualizada com sucesso', usuario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar a avaliação' });
    }
};

export const removerAvaliacao = async (req, res) => {
    const usuario = await prisma.perfil.deleteMany({
        where: {
            usuario: {
                id: parseInt(req.params.usuarioId)
            }
        }
    })

    res.json({
        msg: "Usuário removido com sucesso"
    })
}
