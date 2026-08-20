class ControllerCarro{

    //recebimento e a saida das informações
    Buscar(req, res) {
        try {
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({ message: error.message})
        }
}

    Detalhe(req, res) {
    try {
        const id = req.params.id
        const carro = carros.find(it => it.id == id)

        res.send({ message: carro})
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

    Criar(req, res) {
    try {
        //id, marca, ano
        const { id, marca, ano } = req.body

        if (!id || !marca || !ano ) {
            res.send({ message: "Informe todos os dados"})
            return
        }

        carros.push({ id, marca, ano })
        res.send({ message:"Cadastrado com sucesso"})
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

    Alterar(req, res) {
        try{
            
            } catch (error) {
        res.status(500).send({ message: error.message})
    }
    }

    Deletar(req, res) {
    try{
        const id = req.body.id

        carros.splice(carros, it => it.id === id, 1)

        res.send({ message: "Deletado" })
        } catch (error) {
            res.status(500).send({ message: error.message})
        }
}
}