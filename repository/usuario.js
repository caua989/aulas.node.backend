import usuario from '../model/usuario.js'

// INSERT INTO usuario(marca, ano) VALUES ("FIAT", 1998)
class RepositoryUsuario {
    
    async find() {
        const usuarios = await usuario.findAll()

        return usuarios
    }

    async findById(id) {
        const usuarioDetalhe = await usuario.findByPk(id)

        return usuarioDetalhe
    }

    async Create(email, senha) {
        const usuarioCreate = await usuario.create({ email, senha})

        return usuarioCreate
    }

    async Update(id, email, senha) {
        const usuarioAlterar = await usuario.findByPk(id)

        if(!usuarioAlterar){
            throw new Error("Carro não encontrado")
        }

        usuarioAlterar.email = email
        usuarioAlterar.senha = senha

        await usuarioAlterar.save()

        return usuarioAlterar
    }

    async Delete(id) {
        const usuarioDeletar = await usuario.findByPk(id)

        if(!usuarioDeletar){
            throw new Error("Usuario não encontrado")
        }

        await usuarioDeletar.destroy()

        return usuarioDeletar
    }

    async FindByEmail(email) {
        return usuario.findOne({ where: { email } })
    }
}

export default new RepositoryUsuario()