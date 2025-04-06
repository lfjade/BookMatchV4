import { UsuarioErros, GeneroErros, LivroErros } from "./erros"
export const mensagensPadronizadas = {
    Usuario: {
    [UsuarioErros.USUARIO_NAO_ENCONTRADO]: "Nenhum usuário foi encontrado.",
    [UsuarioErros.USERNAME_DUPLICADO]: "Nome de usuário já cadastrado no sistema.",
    [UsuarioErros.CPF_DUPLICADO]: "CPF já cadastrado no sistema.",
    [UsuarioErros.CAMPO_DE_BUSCA_VAZIO]: "O campo de busca não pode ser vazio."
    },

    Genero:{
        [GeneroErros.GENERO_DUPLICADO]: "Nome de gênero já cadastrado no sistema.",
        [GeneroErros.GENERO_NAO_ENCONTRADO]: "Nenhum gênero foi encontrado.",
        [UsuarioErros.CAMPO_DE_BUSCA_VAZIO]: "O campo de busca não pode ser vazio."
    },
    Livro:{
        [LivroErros.LIVRO_NAO_ENCONTRADO]: "Nenhum livro foi encontrado.",
        [LivroErros.CAMPO_DE_BUSCA_VAZIO]: "O campo de busca não pode ser vazio."
    }
}