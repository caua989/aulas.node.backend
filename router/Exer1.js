import express from "express"
import save1 from "../repository/exer1.js"

const router = express.Router()

router.post("/exer1", (req, res) => {
    const { produto, custo } = req.body

    if(!produto || !custo) {
        res.send({ message: "Informe todos os dados"})
        return
    }

    save1.push({ produto, custo})
    res.send({ message: "cadastrado com sucesso" })
    return
})

router.get("/exer1", (req, res) => {
    res.send({ message: save1 })
})

export default router