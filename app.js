import express from "express"
import steamRouter from "./Routes/steam.routes.js"


const app = express()
const port = 3000

app.use(express.json())
app.use('/public', express.static('public'))

app.use("/jogo", steamRouter)

app.listen(port, () => {
    console.log(`A nossa API está rodando na porta ${port}`)
  })
  
