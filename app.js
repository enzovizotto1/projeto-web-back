import express from "express";
import steamRouter from "./Routes/steam.routes.js"
import usuariosRouter from './Routes/usuarios.routes.js'
import ratingRouter from './Routes/rating.routes.js';
import cors from "cors"

const app = express()
const port = 3001

app.use(express.json())

app.use(cors());

app.use('/public', express.static('public'))
app.use('/usuarios', usuariosRouter)
app.use("/jogo", steamRouter)
app.use("/rating", ratingRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })