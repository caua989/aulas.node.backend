import express from "express";
import exer8 from "../repository/exer8.js";

const router = express.Router()

router.get("/exer1", (req, res) => {
    const { produto, custo } = req.query;

    res.status(200).send({
        message: produto + custo});
});

export default router