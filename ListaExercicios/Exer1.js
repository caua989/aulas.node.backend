import express from "express";

const app = express();

app.post("/api/v1/somar", (req, res) => {
    const { produto, custo } = req.body
    
    res.status(200).send ({ message: produto + custo})
})