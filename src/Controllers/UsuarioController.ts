import { Usuario } from "../Models/Usuario";
import { exibirUsuario, exibirMensagem } from "../Views/UsuarioView";

function exibirUsuarioPorUserName (userName:string){
    const usuarios = Usuario.buscaPorUserName(userName)

    if (usuarios.length===0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}

function exibirUsuarioPorCPF (cpf:string){
    const usuarios = Usuario.buscaPorCPF(cpf)
    if(usuarios.length === 0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}

function exibirUsuarioPorID(id: number){
    const usuarios = Usuario.buscaPorID(id)
    if (usuarios.length === 0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }

}

function exibirUsuarioPorNome(nome: string){
    const usuarios = Usuario.buscaPorNome(nome)

    if (usuarios.length===0){
        exibirMensagem("Usuário não encontrado.")
    } else {
        usuarios.forEach((usuario) => exibirUsuario(usuario))
    }
}