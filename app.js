import express from "express";
import steamRouter from "./Routes/steam.routes.js"
import usuariosRouter from './Routes/usuarios.routes.js'
import rattingRouter from './Routes/ratting.routes.js';

const app = express()
const port = 3000

app.use(express.json())

app.use('/public', express.static('public'))
app.use('/usuarios', usuariosRouter)
app.use("/jogo", steamRouter)
app.use("/avaliacao", rattingRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })