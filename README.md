# Backend Gamebald ![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 

Desenvolvido por:  
[Enzo Oliveira Vizotto](https://github.com/enzovizotto1/) - 20210102097  
[Gustavo Gimenez Teixeira](https://github.com/ggimenezt) - 20210102097   

Este repositório contém o backend do projeto Gamebald, uma aplicação web para avaliação e interação de jogos.

---

## Pré-requisitos

- Node.js (versão 12 ou superior) 
- MySQL (instalado e em execução)

## Instalação

1. Clone o repositório e instale as dependencias utilizando os seguintes comandos:

```bash
git clone https://github.com/enzovizotto1/projeto-web-back.git
cd projeto-web-back
npm install
```

2. Crie um arquivo .env na raiz do projeto e adicione o seguinte conteúdo:
```plaintext
DATABASE_URL="mysql://fulano:senhafulano@localhost:3306/gamebald?schema=public"

JWT_SECRET='75b36bd531288f34ad026227de208699a213ce30cdf8c9f892d3720f0db8e9ebaa50f04f319b88242b5d5cba8157da5d8d8653b465d94a82f79b023c92aea4bc'
```
fulano: seu usuário do mysql (geralmente root)   
senhafulano: senha do usuário fulano para acessr o mysql  
3306: porta que o mysql roda na sua máquina 

3. Execute as migrações do banco de dados utilizando o Prisma:
```bash
npx prisma migrate dev
```

## Executando o Servidor
Após concluir os passos de instalação, você pode executar o servidor utilizando o seguinte comando:
```bash
npm run dev
```

## API Endpoints
-`GET /public/:nomeDaFoto`: Obtém uma foto da pasta public  

-`POST /usuarios/`: Cria/Cadastra um usuário  
-`POST /usuarios/login`: Realiza o login do usuário  
-`GET /usuarios/`: Obtém todos usuários  
-`GET /usuarios/:usuarioId`: Obtém as informações de um usuário específico  
-`PUT /usuarios/config/:usuarioId`: Atualiza informações do usuário  
-`PUT /usuarios/adicionar/:usuarioId`: Adiciona um amigo  
-`PUT /usuarios/recuperacao`: Gera uma nova senha  
-`DELETE /usuarios/:usuarioId`: Deleta um usuário  

-`GET /jogos/`: Obtém todos jogos disponíveis  
-`GET /jogos/id/:jogoId`: Obtém as informações do jogo específico  
-`GET /jogos/nome`: Busca o jogo por nome  

-`POST /avaliacao/`: Cria uma avaliacao  
-`GET /avaliacao/nota/:usuarioId`: Obtém todas avaliações de usuarioId que possuam o status passado no body  
-`GET /avaliacao/estatistica/:usuarioId`: Obtém a quantidade de avaliações por status de um usuario especifico  
-`DELETE /avaliacao/:avaliacaoId`: Deleta uma avaliação  



Lembre-se de ajustar as informações necessárias, como o usuário do banco de dados, a senha e a porta, de acordo com o ambiente de desenvolvimento.
