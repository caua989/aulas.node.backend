import express from "express"
import save1 from "../repository/exer1.js"

const router = express.Router()

router.post("/exer1", (req, res) => {
    const { num1, num2 } = req.body

    if(!num1 || !num2) {
        res.send({ message: "Informe todos os dados"})
        return
    }

    const resultado = Number(num1) + Number(num2)

    save1.push({ resultado })
    res.send({ message: "cadastrado com sucesso" })
    return
})

router.get("/exer1", (req, res) => {
    res.send({ message: save1 })
})

export default router