import express from "express";
import multer from "multer"; //para foto de perfil
import path from "path"; //para foto de perfil
import * as usuariosController from '../Controllers/usuarios.controller.js';
import autorizarUsuario from "../Middlewares/auth.middleware.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public")
    },
    filename:  function (req, file, cb) {
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const router = express.Router();
const upload = multer({ storage }).single('foto_de_perfil');

//CRUD
// Criação, atuaalização, remoção, retornar todos usuários e retornar um usuário especifico

router.post('/', usuariosController.criarUsuario)
router.post('/login', usuariosController.login)
router.put('/:usuarioId', upload, usuariosController.atualizarUsuario)
router.delete('/:usuarioId', usuariosController.deletarUsuario)
router.get('/', usuariosController.getUsuarios)
router.get('/:usuarioId', usuariosController.getUsuarioPorId)
router.put('/adicionar/:usuarioId', usuariosController.adicionarAmigo)

export default router;