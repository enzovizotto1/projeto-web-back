import express from "express";
import usuariosRouter from './Routes/usuarios.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use('/usuarios', usuariosRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })