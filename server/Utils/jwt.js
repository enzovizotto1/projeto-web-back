import jwt from 'jsonwebtoken';

export default function gerarToken(usuario){
    return jwt.sign(usuario, process.env.JWT_SECRET, {expiresIn: '3600s'})
}