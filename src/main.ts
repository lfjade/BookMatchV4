#!/usr/bin/env node

// NOTA: talvez seja necessario revisitar o funcionamento pra impedir que alterações nos atributos como username, id e CPF não dupliquem
// !!!!!!!!!! ideia: padronizar isbn
// fase 3: menus



import "./mockDb";
import { Usuario } from "./Models/Usuario";
import * as UsuarioController from "./Controllers/UsuarioController"
import PromptSync from "prompt-sync";
const prompt = PromptSync()
import { acervo } from "./Menus/acervo";
import { menuUsuario } from "./Menus/menuUsuario"
import { menuAdmin } from "./Menus/menuAdmin"

// function fazerLogin(username: string, senha:string): Usuario | null{
//     const usuario = Usuario.listaUsuarios.find((el) => el.userName===username && el.senha===senha)
//     return usuario ?? null
// }

let controle = true
while (controle){
    console.log("Bem vinde ao BookMatch!")
    console.log("1. Fazer Login")
    console.log("2. Cadastrar")
    console.log("3. Acervo")
    console.log("4. Sair")

    const opcao = Number(prompt("Escolha sua opção: "))
    switch (opcao){
        case 1: // login
            let usernameentrada = String (prompt("Username: "))
            let senhaentrada = String(prompt("Senha: "))

            const usuario = Usuario.listaUsuarios.find(
                (el) => el.userName === usernameentrada
            )

            if (!usuario) {
                console.log("Usuário não encontrado.")
                break
            }

            if (usuario.senha !== senhaentrada) {
                console.log("Senha incorreta.")
                break
            }


            const logado = Usuario.autenticar(usernameentrada, senhaentrada)
            if (logado){
                if (logado.verificaAdmin===true){
                    menuAdmin(logado)
                } else {
                    menuUsuario(logado)
                }
            }
            

            break
        case 2: // cadastrar
            console.log("Entre com seus dados:")
            const nome = prompt ("Nome:")
            const username = prompt("Nome de usuário: ")
            const cpf = prompt("CPF: ")
            const senha = prompt("Senha: ")

            const novoUsuario = new Usuario(nome, username, cpf, senha, false)
            UsuarioController.cadastrar(novoUsuario)
            break
        case 3: //acervo
            acervo()
            break
        case 4: // sair
            console.log("Saindo...")
            controle=false
            break
        default:
            console.log("Opção não reconhecida.")
            break
    }
}