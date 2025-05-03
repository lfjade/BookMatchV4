import { Usuario } from "../Models/Usuario"
import * as UsuarioController from "../Controllers/UsuarioController"
import PromptSync from "prompt-sync"

export function menuAdmin(usuario: Usuario){
    console.log(`Seja bem vinde, ${usuario.userName}!`)
    let controle = true
    while(controle){
        const prompt = PromptSync()
        console.log("1. Registrar Locação")
        console.log("2. Registrar Devolução")
        console.log("3. Ver locações atrasadas")
        console.log("4. Gerenciar Locações")
        console.log("5. Gerenciar Usuários")
        console.log("6. Gerenciar Livros")
        console.log("7. Gerenciar Gêneros")
        console.log("8. Sair")
        
        let opcao = Number(prompt("Entre com sua opção: "))

        switch(opcao){
            case 1: // registrar locação
                break
            case 2: //registrar devolução
                break
            case 3: // Ver locações atrasadas
                break
            case 4: // gerenciar locações
                break
            case 5: // gerenciar usuários
                break
            case 6: // gerenciar livros
                break
            case 7: // gerenciar gêneros
                break
            case 8: 
                console.log("Saindo...")
                controle = false
                break
            default:
                console.log("Opção não reconhecida.")
        }
    }
}