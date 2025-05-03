import { Usuario } from "../Models/Usuario"
import PromptSync from "prompt-sync"
import { exibirUsuario } from "../Views/UsuarioView"
import { exibirPorUsuario } from "../Controllers/LocacaoController"
import { acervo } from "./acervo"

export function menuUsuario(usuario: Usuario){

    let controle = true
    while (controle){
        const prompt = PromptSync()
        console.log(`Bem vinde, ${usuario.userName}!`)
        console.log("1. Meus dados")
        console.log("2. Minhas locações")
        console.log("3. Consultar acervo")
        console.log("4. Sair")
        let opcao = Number(prompt("Entre com sua opção: "))

        switch(opcao){
            case 1: //meus dados
                exibirUsuario(usuario)
                console.log("1. Alterar dados pessoais")
                console.log("2. Sair")
                let opcaoMenu = Number(prompt("Entre com a opção: "))
                if (opcaoMenu===1){
                    let controleMenu1 = true
                    while(controleMenu1){
                        console.log("Alterando dados pessoais")
                        console.log("1. Alterar nome")
                        console.log("2. Alterar nome de usuário")
                        console.log("3. Alterar CPF")
                        console.log("4. Alterar senha")
                        console.log("5. Sair")
                        let opcaoMenu1 = Number(prompt("Entre com sua opção: "))
                        switch(opcaoMenu1){
                            case 1: // alterar nome
                                let novoNome = prompt("Entre com o novo nome: ")
                                let confirmaNome = Number(prompt(`Confirma o nome ${novoNome}? 1. Sim | 2. Não`))
                                if (confirmaNome===1){
                                    usuario.nome=novoNome
                                    console.log("Nome alterado com sucesso.")
                                } else if (confirmaNome ===2){
                                    console.log("Operação cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }

                                break
                            case 2: // alterar username
                                let novoUserName = prompt ("Entre com o novo nome de usuário: ")
                                let confirmaUserName = Number(prompt(`Confirma o nome ${novoUserName}? 1. Sim | 2. Não`))
                                if (confirmaUserName==1){
                                    usuario.userName=novoUserName
                                    console.log("Nome de usuário alterado com sucesso.")
                                } else if (confirmaUserName ===2){
                                    console.log("Operação cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                break
                            case 3: //alterar cpf
                                let novoCPF = prompt ("Entre com o novo nome de usuário: ")
                                let confirmaCPF = Number(prompt(`Confirma o nome ${novoCPF}? 1. Sim | 2. Não`))
                                if (confirmaCPF==1){
                                    usuario.cpf=novoCPF
                                    console.log("CPF alterado com sucesso.")
                                } else if (confirmaCPF ===2){
                                    console.log("Operação cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                break
                            case 4: // alterar senha
                                let testeSenha = prompt("Informe a senha atual")
                                if (testeSenha === usuario.senha){
                                    let novaSenha = prompt("Informe a nova senha: ")
                                    let confirmaNovaSenha = Number(prompt("Confirma a troca de senha? 1. Sim | 2. Não"))
                                        if (confirmaNovaSenha===1){
                                            usuario.senha=novaSenha
                                            console.log("Senha alterada com sucesso.")
                                        } else if (confirmaNovaSenha===2){
                                            console.log("Operação cancelada.")
                                        } else {
                                            console.log("Opção não reconhecida.")
                                        }
                                }
                                break
                            case 5:
                                console.log("Saindo...")
                                break
                            default:
                                console.log("Opção não reconhecida.")
                                break

                        }
                    }
                    
                } else if (opcaoMenu ===2){
                    console.log("Saindo...")
                    controle = false
                } else {
                    console.log("Opção não reconhecida.")
                }
                break
            case 2: // minhas locações
                console.log("Minhas Locações")
                exibirPorUsuario(usuario.userName)
                break
            case 3: // acervo
                acervo()
                break
            case 4: 
                console.log("Saindo...")
                controle = false
                break
            default: 
                console.log("Opção não reconhecida.")
                break
        }

    }
}