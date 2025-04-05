import { UsuarioErros, GeneroErros } from "./erros"
export const mensagensPadronizadas = {
    Usuario: {
    [UsuarioErros.USUARIO_NAO_ENCONTRADO]: "Usuário não encontrado.",
    [UsuarioErros.USERNAME_DUPLICADO]: "Nome de usuário já cadastrado no sistema.",
    [UsuarioErros.CPF_DUPLICADO]: "CPF já cadastrado no sistema."
    },

    Genero:{
        [GeneroErros.GENERO_DUPLICADO]: "Nome de gênero já cadastrado no sistema.",
        [GeneroErros.GENERO_NAO_ENCONTRADO]: "Gênero não encontrado."
    }
}