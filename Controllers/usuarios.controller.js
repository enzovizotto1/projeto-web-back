import {PrismaClient} from "@prisma/client"
import gerarToken from "../Utils/jwt.js"

const prisma = new PrismaClient()

export const criarUsuario = async (req, res) => {
    try{
        const usuario = await prisma.usuario.create({
            data:{
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                username: req.body.username,
            }
        })

        const token = gerarToken(usuario)

        res.json({
            data: usuario,
            token: token,
            msg: "User criado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      }
}

export const login = async (req, res) => {
    try{
        const usuario = await prisma.usuario.findFirst({
            where:{
                AND:{
                    email: req.body.email,
                    senha: req.body.senha
                }
            }
        })

        if(usuario == null){
            res.status(401).json({
                msg: "Email ou senha não conferem"
            })
        }

        const token = gerarToken(usuario)

        res.json({
            data: usuario,
            token: token,
            msg: "Login feito com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao fazer login' });
      }
}

export const atualizarUsuario = async (req, res) => {
    try{
        const usuario = await prisma.usuario.update({
            where:{
                id: parseInt(req.params.usuarioId)
            },
            data:{
                username: req.body.username,
                bio: req.body.bio,
                foto_de_perfil: req.file.filename
            }
        })

        res.json({
            data: usuario,
            msg: "User atualizado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar informações do usuário' });
      }
}

export const deletarUsuario = async (req, res) => {
    try{
        const usuarioDeletado = await prisma.usuario.deleteMany({
            where: {      
                id: parseInt(req.params.usuarioId)}
        })
        res.json({
            msg: "Usuários deletado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
}

export const getUsuarios = async (req, res) => {
    try{
        const usuario = await prisma.usuario.findMany({
            where: {
                nome: {
                    contains: req.query.nome
                }
            },
        })

        res.json({
            data: usuario,
            msg: "Usuários retornados com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
      }
}

export const getUsuarioPorId = async (req, res) => {
    try{
        const usuario = await prisma.usuario.findUnique({
            where: {
                id: parseInt(req.params.usuarioId)
            },
            include: {
                avalicao: true,
                amigo: true,
                amigoDe: true
            }
        })

        res.json({
            data: usuario,
            msg: "Usuário retornado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
      }
}

export const adicionarAmigo = async (req, res) => {
    try{
        const usuario = await prisma.usuario.update({
            where:{
                id: parseInt(req.params.usuarioId)
            },
            data:{
                amigo: {
                    connect: req.body.amigo
                }
            }
        })

        res.json({
            data: usuario,
            msg: "Amigo adicionado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar amigo' });
      }
}

export const recuperarSenha = async (req, res) => {
    try{
    const novaSenha =  Math.random().toString(36).slice(-10);
    const usuario = await prisma.usuario.update({
        where:{
            email: req.body.email
        },
        data:{
            senha: novaSenha
        }
    })

    res.json({
        msg: "Senha atualizada com sucesso"
    })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao tentar alterar senha' });
      }
}