import express from "express"
import save2 from "../repository/exer2.js"

const router = express.Router()

router.post("/exer2", (req, res) => {
    const { comprimento, largura } = req.body

    if(!comprimento || !largura) {
        res.send({ message: "Informe todos os dados"})
        return
    }

    save1.push({ produto, custo})
    res.send({ message: "cadastrado com sucesso" })
    return
})

router.get("/exer2", (req, res) => {
    res.send({ message: save1 })
})

export default router