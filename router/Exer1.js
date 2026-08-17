import express from "express"
import save1 from "../repository/exer1.js"

const router = express.Router()

router.post("/exer1/criar", (req, res) => {
    const { produto, custo } = req.body

    if(!produto || custo) {
        res.send({ message: "Informe todos os dados"})
        return
    }

    save1.push({ produto, custo})
    res.send({ message: "cadastrado com sucesso" })
})

export default router