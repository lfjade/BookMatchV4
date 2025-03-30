export enum UsuarioErros{
    USERNAME_DUPLICADO = "USERNAME_DUPLICADO",
    CPF_DUPLICADO = "CPF_DUPLICADO",
    USUARIO_NAO_ENCONTRADO= "USUARIO_NAO_ENCONTRADO"
}

export const mensagensPadronizadas: Record<UsuarioErros, string> ={
    [UsuarioErros.USUARIO_NAO_ENCONTRADO]: "Usuário não encontrado.",
    [UsuarioErros.USERNAME_DUPLICADO]: "Nome de usuário já cadastrado no sistema.",
    [UsuarioErros.CPF_DUPLICADO]: "CPF já cadastrado no sistema."
}