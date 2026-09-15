import RepositoryUsuario from '../repository/usuario.js'

class ServiceUsuario {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryUsuario.find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const usuario = await RepositoryUsuario.findById(id)
        
        if(!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }

        return usuario
    }
    // Função(parametros, parametros, parametros)
    async Criar(email, senha) {
         if (!email || !senha) {
             throw new Error("Favor informar todos os dados")
         }
         const usuario = await RepositoryUsuario.Create( email, senha )

         return usuario
    }

    async Alterar(id, email, senha) {
        if (!id || !email || !senha) {
            throw new Error("Favor informar os dados");
        }

        const usuarioAlterado = await RepositoryUsuario.Update(id, email, senha)

        return usuarioAlterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const usuario = await RepositoryUsuario.Delete(id)

        return usuario
    }

}

export default new ServiceUsuario()