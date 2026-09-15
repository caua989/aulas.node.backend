import jwt from 'jsonwebtoken'

const segredo = 'M3uS3rg3d0'

export default async function authMiddleware(req, res, next) {
    try {
        //verificar se o JWT é valido
        const token = req.headers['authorization']

        console.log(token)

        if(!token){
            throw new Error()
        }

        const decoded = jwt.verify(token, segredo)
        console.log(decoded)

        console.log(decoded)
        next()

    } catch (error) {
        res.status(403).send({
            message: "Usuario ou senha inválido"
        })
    }
}