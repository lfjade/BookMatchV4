import { Usuario } from "../Models/Usuario";
import { exibirUsuario, exibirMensagem } from "../Views/UsuarioView";

export function exibirUsuarioPorUserName (userName:string){
    const usuarios = Usuario.buscaPorUserName(userName)

    if (usuarios.length===0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}

export function exibirUsuarioPorCPF (cpf:string){
    const usuarios = Usuario.buscaPorCPF(cpf)
    if(usuarios.length === 0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}

export function exibirUsuarioPorID(id: number){
    const usuarios = Usuario.buscaPorID(id)
    if (usuarios.length === 0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }

}

export function exibirUsuarioPorNome(nome: string){
    const usuarios = Usuario.buscaPorNome(nome)

    if (usuarios.length===0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}

export function exibirUsuarioPorConta(conta:boolean){
    const usuarios = Usuario.buscaPorTipoDeConta(conta)

    if (usuarios.length===0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario)=> exibirUsuario(usuario))
    }
}

export function cadastrarUsuario(usuario:Usuario){
    const resultado = Usuario.registrarUsuario(usuario)

    if (resultado.sucesso){
        exibirMensagem("Usuário cadastrado com sucesso.")
    }

    switch (resultado.erro){
        case "USERNAME_DUPLICADO":
            exibirMensagem("Nome de usuário já cadastrado no sistema.")
        break;
        case "CPF_DUPLICADO":
            exibirMensagem("CPF já cadastrado no sistema.")
            break
    }
}

export function deletarUsuario(usuario:Usuario){
    const resultado=Usuario.deletarUsuario(usuario)

    if(resultado.sucesso){
        exibirMensagem("Usuário deletado com sucesso.")
    } else {
        exibirMensagem("Usuário não encontrado")
    }
}