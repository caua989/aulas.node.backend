import express from "express";

const app = express();

app.get("/api/v1/somar", (req, res) => {
    console.log(req.query)
    
    const num1 = Number(req.query.batata);
    const num2 = Number(req.query.num2);

    const resultado = num1 + num2;

    res.send({ resultado });
})

app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

     res.send({ message: id })
})

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
})