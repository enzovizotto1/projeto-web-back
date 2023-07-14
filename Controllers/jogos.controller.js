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
                {"nome": "Zelda", "foto": "zelda.png", "sinopse": "O game se passa no reino de Hyrule, no qual o jovem guerreiro Link tem a missão de salvar seu povo, a Princesa Zelda e proteger a Triforce, símbolo deixado por deusas capaz de trazer ao mundo uma era de harmonia e prosperidade."},
                {"nome": "CSGO", "foto": "csgo.png", "sinopse": "CS:GO é um FPS da Valve disputado entre duas equipes. Elas se revezam entre terroristas e contra terroristas, os terroristas armam a bomba enquanto o outro time protege os sites, locais onde os explosivos devem ser plantados. Alguns mapas funcionam com reféns, que por sua vez devem ser salvos pelos contra terroristas."},
                {"nome": "Mario", "foto": "mario.png", "sinopse": "Mario Bros retrata as aventuras de Mario, um encanador, e seus amigos, que se unem em torno de um objetivo em comum: salvar a princesa Peach, capturada pelo terrível monstro Bowser Koppa."},
                {"nome": "Valorant", "foto": "valorant.png", "sinopse": "Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!"},
                {"nome": "Sonic", "foto": "sonic.png", "sinopse": "O porco-espinho Sonic é teletransportado para a Terra. Após causar uma pane elétrica em parte dos Estados Unidos, ele precisa escapar do maligno cientista Dr. Robotnik."},
                {"nome": "Minecraft", "foto": "minecraft.png", "sinopse": "Minecraft é um jogo eletrônico lançado em 2009 que consiste em sobreviver em um mundo formado (majoritariamente) por blocos cúbicos. Steve, o personagem controlado pelo jogador, inicia o jogo em um ambiente repleto de árvores, montanhas, rios."},
                {"nome": "Paladins", "foto": "paladins.png", "sinopse": "Junte-se a mais de 25 milhões de jogadores em Paladins, a jogo que tiro em equipes com temática de fantasia que é uma grande sensação. Use magia e armas como um lendário Campeão do Reino e personalize um baralho de cartas com habilidades especiais para montar o seu próprio estilo de jogo."},
                {"nome": "Team Fortress 2", "foto": "tf2.png", "sinopse": "Team Fortress 2 é um cartoon shooter do tipo tiro em primeira pessoa (FPS) e que conseguiu a proeza de desbancar o famoso Counter-Strike como o jogo com mais jogadores se matando ao mesmo tempo. O jogo foi lançado em meados de 2007 e já tem versões para PC e Mac além de Xbox 360 e Playstation 3."},
                {"nome": "Terraria", "foto": "terraria.png", "sinopse": "Terraria é um jogo eletrônico RPG de ação-aventura independente produzido pela desenvolvedora de jogos Re-Logic. Possui como características a exploração, artesanato, construção de estruturas e combate a monstros perigosos em um mundo 2D gerado proceduralmente."},
                {"nome": "Portal 2", "foto": "portal.png", "sinopse": "Portal 2 é um jogo de puzzles com a visão em primeira pessoa. A premissa do jogo é a resolução de problemas de natureza não- violenta e a travessia do cenário utilizando um dispositivo que cria portais, recurso que dá o nome ao jogo"},
                {"nome": "Dark Souls", "foto": "darksouls.png", "sinopse": "Dark Souls se passa primariamente no reino fictício de Lordran, onde os jogadores assumem o papel de um personagem denominado 'Chosen Undead' que, segundo lendas, seria responsável pela quebra de uma maldição que torna incapazes de morrer aqueles que são afligidos por uma misteriosa marca negra"},
                {"nome": "Club Penguin", "foto": "clubpenguin.png", "sinopse": "O Club Penguin é um MMOSG (Massively Multiplayer Online Social Game) em que você simula situações da vida em sociedade, mas com avatares de Pinguim. No jogo, você pode conversar, jogar minigames e muitas outras coisas. Como é um jogo online, pode ser jogado em. Além disso, ele também está disponível para Android e iOS."},
                {"nome": "Mortal Kombat", "foto": "mortalkombat.png", "sinopse": "A história do game foca no primeiro torneio milenar e na derrubada de Shang Tsung. Aqui, as lutas são separadas em três rounds e o jogador com duas vitórias tem o poder de vencer seu adversário com o famoso Fatality, golpe finalizador super violento usado no fim da luta."},
                {"nome": "Bloons TD6", "foto": "bloons.png", "sinopse": "Bloons TD 6 é o sexto game da popular franquia da Ninja Kiwi, na qual jogadores devem impedir o avanço de hordas de inimigos chamados Bloons, balões coloridos de variados tipos"},
                {"nome": "Apex Legends", "foto": "apexlegends.png", "sinopse": "Apex Legends™ se passa em um universo imersivo em que a história continua evoluindo, os mapas mudam e novas Lendas continuam entrando na luta. Deixe sua marca nos Jogos Apex com uma infinidade de uniformes distintos e junte-se à aventura!"},
                {"nome": "Dota 2", "foto": "dota.png", "sinopse": "Dota 2 é um jogo eletrônico do gênero multiplayer online battle arena (MOBA) no qual duas equipes de cinco jogadores competem para destruir uma grande estrutura defendida pela equipe adversária conhecida como 'Ancestral' enquanto defende a sua."},
                {"nome": "Outlast", "foto": "outlast.png", "sinopse": "O inferno é um experimento do qual não há escapatória em Outlast, um jogo de terror de sobrevivência em primeira pessoa da Red Barrels. Como o jornalista investigativo Miles Upshur, explore o Mount Massive Asylum e tente sobreviver tempo o bastante para descobrir seu terrível segredo... se tiver coragem."},
                {"nome": "Brawlhalla", "foto": "brawlhalla.png", "sinopse": "Brawlhalla é um Jogo de Luta de Plataforma Gratuito, no qual os maiores guerreiros da história lutam para provar quem foi, é ou será o melhor guerreiro de todos os tempos. Já Disponível para Steam, PS4, Xbox One e Nintendo Switch."},    
                {"nome": "Halo", "foto": "halo.png", "sinopse": "Eles são os Espartanos e você joga com um deles, que tem o apelido de Master Chief. Sua missão ao longo de todos os jogos é impedir as ameaças de acabarem com a Terra, lutando contra parasitas do espaço e também contra um grupo de alienígenas chamado Covenant!"},
                {"nome": "Forza", "foto": "forza.png", "sinopse": "Forza Horizon é um jogo em um festival, chamado Festival Horizon que ocorre no estado do Colorado. O objetivo é progredir no jogo para obter pulseiras por pilotar depressa, destruir propriedade, vencer corridas de pilotagem. Horizon apresenta as físicas de Forza Motorsport 4."}
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

