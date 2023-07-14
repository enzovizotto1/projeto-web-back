// avaliacaoController.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function popularJogos() {
    try{
        const jogosCount = await prisma.jogo.count();
        if(jogosCount > 0){
            console.log("Jogos já populado");
            return
        } else{
            const jogos = [
                {"nome": "Zelda", "foto": "../public/zelda.png", "sinopse": "O game se passa no reino de Hyrule, no qual o jovem guerreiro Link tem a missão de salvar seu povo, a Princesa Zelda e proteger a Triforce, símbolo deixado por deusas capaz de trazer ao mundo uma era de harmonia e prosperidade."},
                {"nome": "CSGO", "foto": "../public/csgo.png", "sinopse": "CS:GO é um FPS da Valve disputado entre duas equipes. Elas se revezam entre terroristas e contra terroristas, os terroristas armam a bomba enquanto o outro time protege os sites, locais onde os explosivos devem ser plantados. Alguns mapas funcionam com reféns, que por sua vez devem ser salvos pelos contra terroristas."},
                {"nome": "Mario", "foto": "../public/mario.png", "sinopse": "Mario Bros retrata as aventuras de Mario, um encanador, e seus amigos, que se unem em torno de um objetivo em comum: salvar a princesa Peach, capturada pelo terrível monstro Bowser Koppa."},
                {"nome": "Valorant", "foto": "../public/valorant.png", "sinopse": "Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!"},
                {"nome": "Sonic", "foto": "../public/mario.png", "sinopse": "O porco-espinho Sonic é teletransportado para a Terra. Após causar uma pane elétrica em parte dos Estados Unidos, ele precisa escapar do maligno cientista Dr. Robotnik."}
            ]

            for (const jogo of jogos) {
                await prisma.jogo.create({
                    data: jogo
                });
              }
        }
    } catch (error) {
        console.error('Não foi possivel popular o banco:', error);
        return null;
    }
}

// Obter todas as avaliações de um usuário específico
export const getTodosJogos = async (req, res) => {
    try{
        const jogos = await prisma.jogo.findMany()
        res.json({
            data: jogos,
            msg: "Jogos retornados com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogos' });
      }
};
  
  // Obter todas as avaliações de todos os usuários
export const getJogoPorId = async (req, res) => {
    try{
        const jogo = await prisma.jogo.findUnique({
            where: {
                id: parseInt(req.params.jogoId)
            },
            include: {
                avalicao: true
            }
        })

        if(jogo == null){
            res.json({
                msg: "Jogo não encontrado"
            })
        }
        else{
            res.json({
                data: jogo,
                msg: "Jogo retornado com sucesso"
            })
        }

        
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogo' });
      }
};

export const getJogoPorNome = async (req, res) => {
    try{
        const jogo = await prisma.jogo.findMany({
            where: {
                nome: {
                    contains: req.body.nome
                }
            }
        })


        res.json({
            data: jogo,
            msg: "Jogo retornado com sucesso"
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar jogo por nome' });
      }
};

