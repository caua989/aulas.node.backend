import express from 'express'
import ControllerCarro from "../Controller/carro.js"

const router = express.Router()

//Buscar tudo
router.get("/buscar", ControllerCarro.Buscar)

//Buscar um
router.get("/detalhe/:id", ControllerCarro.Detalhe)

//Criar um
router.post("/criar", ControllerCarro.Criar)

//Mudar um
router.post("/alterar", ControllerCarro.Alterar)

//deletar um
router.post("/deletar", ControllerCarro.Deletar)

export default router