import express from "express";
import exer1 from "../repository/Exer1";

const router = express.Router()

router.get("/api/exer1", (req, res) => {
    const { produto, custo } = req.query;

    res.status(200).send({
        message: produto + custo
    });
});

export default router