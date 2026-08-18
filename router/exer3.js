import express from "express"
import save3 from "../repository/exer3.js"

const router = express.Router()

router.post("/exer3", (req, res) => {
    const [ total, parcelas] = req.body

    if(!total || !parcelas) {
        res.send({ message: "informe todos os dados"})
        return
    }

    const resultado = Number(total) / Number(parcelas)

    save3.push({ resultado })
    res.send({ message: "Cadastrado com sucesso"})
})

router.get("/exer3", (req, res) => {
    res.send({ message: save3})
})

export default router