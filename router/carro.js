import express from "express"
import ControllerCarro from "../Controller/carro.js"

const router = express.Router()

router.get("/buscar", ControllerCarro.Buscar)
router.get("/detalhe/:id", ControllerCarro.Detalhe)
router.post("/criar", ControllerCarro.Criar)
router.put("/alterar/:id", ControllerCarro.Alterar)
router.delete("/deletar/:id", ControllerCarro.Deletar)

export default router