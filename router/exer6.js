import express from "express";
import exer6 from "../repository/exer6.js";

const router = express.Router()

router.get("/exer1", (req, res) => {
    const { produto, custo } = req.query;

    res.status(200).send({
        message: produto + custo});
});

export default router