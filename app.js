import express from "express";
import steamRouter from "./Routes/steam.routes.js"
import usuariosRouter from './Routes/usuarios.routes.js'
import ratingRouter from './Routes/rating.routes.js';
import cors from "cors"

//import rattingRouter from './Routes/ratting.routes.js';

const app = express();
const port = 3001;

app.use(express.json())

app.use('/public', express.static('public'))
app.use('/usuarios', usuariosRouter)
app.use("/jogo", steamRouter)
app.use("/ratting", rattingRouter)

app.use('/public', express.static('public'));
app.use('/usuarios', usuariosRouter);
app.use('/jogo', steamRouter);
//app.use('/ratting', rattingRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })