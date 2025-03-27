//View: Formatação de mensagens; saída de dados no console; mostrar objetos

import { Usuario } from "../Models/Usuario";


export function exibirMensagem(mensagem: string) {
    console.log(mensagem)
}

export function exibirUsuario(usuario: Usuario){
    
    exibirMensagem(`ID: ${usuario.id}\n
        Nome:${usuario.nome}\n
        Username: ${usuario.userName}\n
        CPF: ${usuario.cpf}\n
        Tipo de conta:${usuario.verificaAdmin? "Admin" : "Conta comum"}`)

}

