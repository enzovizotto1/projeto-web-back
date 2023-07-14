# Backend Gamebald 

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
fulano -> seu usuário do mysql  
suafulano -> senha do usuário fulano para acessr o mysql  
3305 -> porta que o mysql roda na sua máquina 

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
