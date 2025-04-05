import { Usuario } from "../Models/Usuario";
import { exibirUsuario, exibirMensagem } from "../Views/UsuarioView";
import { UsuarioErros, mensagensPadronizadas } from "../utils/mensagensPadronizadas";

function exibirUsuarios(usuarios: Usuario[], mensagemNaoEcontrado:string){
    if (usuarios.length===0){
        exibirMensagem(mensagemNaoEcontrado)
    } else {
        usuarios.forEach(exibirUsuario)
    }
}


export function exibirPorUserName (userName:string){
    exibirUsuarios(Usuario.buscaPorUserName(userName), UsuarioErros.USUARIO_NAO_ENCONTRADO);
}

export function exibirPorCPF (cpf:string){
    exibirUsuarios(Usuario.buscaPorCPF(cpf), UsuarioErros.USUARIO_NAO_ENCONTRADO);
}

export function exibirPorID(id: number){
    exibirUsuarios(Usuario.buscaPorID(id), UsuarioErros.USUARIO_NAO_ENCONTRADO);
}

export function exibirPorNome(nome: string){
    exibirUsuarios(Usuario.buscaPorNome(nome), UsuarioErros.USUARIO_NAO_ENCONTRADO);    
}

export function exibirPorConta(conta:boolean){
    exibirUsuarios(Usuario.buscaPorTipoDeConta(conta), UsuarioErros.USUARIO_NAO_ENCONTRADO);
}

export function cadastrar(usuario: Usuario) {
    const resultado = Usuario.registrarUsuario(usuario);

    if (resultado.sucesso) {
        exibirMensagem("Usuário cadastrado com sucesso.");
        return;
    }

    exibirMensagem(mensagensPadronizadas[resultado.erro as UsuarioErros] || "Erro desconhecido na criação de usuário.");
}

export function deletar(usuario: Usuario) {
    const resultado = Usuario.deletarUsuario(usuario);

    exibirMensagem(resultado.sucesso ? "Usuário deletado com sucesso." : UsuarioErros.USUARIO_NAO_ENCONTRADO);
}