import { Usuario } from "../Models/Usuario";
import { exibirMensagem } from "./MensagemView";


export function exibirUsuario(usuario: Usuario){
    
    exibirMensagem(`ID: ${usuario.id}\n
        Nome:${usuario.nome}\n
        Username: ${usuario.userName}\n
        CPF: ${usuario.cpf}\n
        Tipo de conta:${usuario.verificaAdmin? "Admin" : "Conta comum"}`)

}

