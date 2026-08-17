import express from 'express'
import exer1 from './router/exer1.js'

const app = express()
app.use(express.json())

app.use("/api/v1/carro", exer1)

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})