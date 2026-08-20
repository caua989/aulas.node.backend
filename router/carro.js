import express from 'express'
import carros from "../repository/carro.js"

const router = express.Router()

//Buscar tudo
router.get("/buscar")

//Buscar um
router.get("/detalhe/:id")

//Criar um
router.post("/criar")

//Mudar um
router.post("/alterar")

//deletar um
router.post("/deletar")

export default router