import express from 'express'
import exer1 from './router/exer1.js'
import exer2 from './router/exer2.js'
import exer3 from './router/exer3.js'

const app = express()
app.use(express.json())

app.use("/api", exer1)
app.use("/api", exer2)
app.use("/api", exer3)

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})