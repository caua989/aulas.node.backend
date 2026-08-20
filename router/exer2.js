import express from "express"
import save2 from "../repository/exer2.js"

const router = express.Router()

router.post("/exer2", (req, res) => {
    const { ganhos, horas } = req.body

    if(!ganhos || !horas) {
        res.send({ message: "Informe todos os dados"})
        return
    }

     const resultado = Number(ganhos) * Number(horas)

    save2.push({ resultado})
    res.send({ message: "cadastrado com sucesso" })
})

router.get("/exer2", (req, res) => {
    res.send({ message: save2 })
})

export default router