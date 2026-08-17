import express from 'express'
import carros from "../repository/carro.js"

const router = express.Router()

//Buscar tudo
router.get("/buscar", (req, res) => {
    res.send({ message: carros })
})

//Buscar um
router.get("/detalhe/:id",  (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id == id)

    res.send({ message: carro})
})

//Criar um
router.post("/criar", (req, res) => {
    //id, marca, ano
    const { id, marca, ano } = req.body

    if (!id || !marca || !ano ) {
        res.send({ message: "Informe todos os dados"})
        return
    }

    carros.push({ id, marca, ano })
    res.send({ message:"Cadastrado com sucesso"})
})

//Mudar um
router.post("/alterar", (req, res) => {})

//deletar um
router.post("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(carros, it => it.id === id, 1)

    res.send({ message: "Deletado" })
})

export default router