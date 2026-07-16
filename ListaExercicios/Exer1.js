import express from "express";

const app = express();

app.get("/api/exer1", (req, res) => {
    const { produto, custo } = req.query;

    res.status(200).send({
        message: produto + custo
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});