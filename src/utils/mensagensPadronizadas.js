"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensagensPadronizadas = void 0;
var erros_1 = require("./erros");
exports.mensagensPadronizadas = {
    Usuario: (_a = {},
        _a[erros_1.UsuarioErros.USUARIO_NAO_ENCONTRADO] = "Usuário não encontrado.",
        _a[erros_1.UsuarioErros.USERNAME_DUPLICADO] = "Nome de usuário já cadastrado no sistema.",
        _a[erros_1.UsuarioErros.CPF_DUPLICADO] = "CPF já cadastrado no sistema.",
        _a),
    Genero: (_b = {},
        _b[erros_1.GeneroErros.GENERO_DUPLICADO] = "Nome de gênero já cadastrado no sistema.",
        _b[erros_1.GeneroErros.GENERO_NAO_ENCONTRADO] = "Gênero não encontrado.",
        _b)
};
