import { Usuario } from "../Models/Usuario";

export class UsuarioView {
    static exibirUsuario(usuario: Usuario | null){
        if(usuario === null){
            console.log("Nenhum usuário foi encontrado.")
        } else {
            console.log(`ID: ${usuario.id}\n
                Nome:${usuario.nome}\n
                Username: ${usuario.userName}\n
                CPF: ${usuario.cpf}\n
                Tipo de conta:${usuario.verificaAdmin? "Admin" : "Conta comum"}`)
        }
    }
}