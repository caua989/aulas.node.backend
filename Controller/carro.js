import ServiceCarro from '../service/carro.js'

class ControllerCarro{

    //recebimento e a saida das informações
    Buscar(_, res) {
        try {
            const carros = ServiceCarro.Buscar()
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({ message: error.message})
        }
}

    Detalhe(req, res) {
    try {
        const id = req.params.id
        const carro = ServiceCarro.Detalhe(id)

        res.send({ message: carro})
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

    Criar(req, res) {
    try {
        //id, marca, ano
        const { id, marca, ano } = req.body

        ServiceCarro.Criar(id, marca, ano)
        
        res.send({ message:"Cadastrado com sucesso"})
    } catch (error) {
        res.status(500).send({ message: error.message})
    }
}

    Alterar(req, res) {
        try{
            ServiceCarro.Alterar
            } catch (error) {
        res.status(500).send({ message: error.message})
    }
    }

    Deletar(req, res) {
    try{
        const id = req.body.id

        ServiceCarro.Deletar(id)

        res.send({ message: "Deletado" })
        } catch (error) {
            res.status(500).send({ message: error.message})
        }
}
}

export default new ControllerCarro()