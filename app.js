import express from "express";
import jogosRouter from "./Routes/jogos.routes.js"
import usuariosRouter from './Routes/usuarios.routes.js'
import avaliacaoRouter from './Routes/avaliacao.routes.js';
import cors from "cors"

const app = express()
const port = 3001

app.use(express.json())

app.use(cors());

app.use('/public', express.static('public'))
app.use('/usuarios', usuariosRouter)
app.use("/jogos", jogosRouter)
app.use("/avaliacao", avaliacaoRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })