import express from "express"
import exer1 from "../repository/exer1.js"

const router = express.Router()

router.post("/exer1/criar", (req, res) => {
    const { produto, custo } = req.query

    if(!produto, custo)

    res.status(200).send({
        message: produto + custo})
});

export default router