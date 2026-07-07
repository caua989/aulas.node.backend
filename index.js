import express from "express";
import bancoDeDados from "./repository/index.js";

const app = express();
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa ) {
        res.send({ message: "pessoa não encontrada"})
        return
    }

    res.send({ pessoa })
})
app.get("/api/pessoa", (req, res) => {
    const { id, name } = req.query

    if(!id || !name) {
        res.send({ message: "Favor informar id e name"})
        return
    }

    bancoDeDados.push({ id, name })
    //console.log(bancoDeDados)

     res.send({ message: "Pessoa criada com sucesso" })
})

app.get("/api/pessoa/deletar", (req, res) => {
    const id = req.params.id

    if(!id) {
        res.send({ message: "Pessoa não encontrada"})
        return
    }

    bancoDeDados.delete({ id, name })
    //console.log(bancoDeDados)

    res.send({ message: "Pessoa deletada com sucesso" })
})

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
}) // http://localhost:3000/api/pessoa/abcde




//app.get("/api/v1/somar", (req, res) => {
    //console.log(req.query)
    
    //const num1 = Number(req.query.batata);
    //const num2 = Number(req.query.num2);

    //const resultado = num1 + num2;

    //res.send({ resultado });
//})