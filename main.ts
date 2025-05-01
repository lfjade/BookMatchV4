// fase 1: métodos de criação de objetos, pesquisas dentro das classes e testes

// Próximo passo: PRINCÍPIO DA SEPARAÇÃO DE PREOCUPAÇÕES -  PSP ou SEPARATION OF CONCERNS - SoC
// Aplicando MVC
// Models: Criação, atualização, exclusão e busca

//View: Formatação de mensagens; saída de dados no console; mostrar objetos
//Controller: Receber entradas de usuario (como parametros de busca)
// chamar o model para manipular dados
// usar o view para apresentar a saída pro usuário
// controlar o fluxo da aplicação

// implementando Gênero

//!!!!!!!!!!!!!! IMPLEMENTANDO LIVRO
//  PADRONIZAR ERROS DE LIVRO > busca não pode ser um campo vazio 
// necessidade de implementar erros de busca com campo vazio em Usuário e Gênero também
// !!!!!!!!!!!!!!!!!!11 ADICIONAR METODOS 'LISTAR TODOS'
//  comparar métodos análogos nas classes livro, genero e usuario
// !!!!!!!!!! ideia: padronizar isbn
// fase 2: login
// fase 3: menus

import { Usuario } from "./src/Models/Usuario";
import * as UsuarioController from "./src/Controllers/UsuarioController"
import PromptSync from "prompt-sync";
const prompt = PromptSync()
import { acervo } from "./src/Menus/acervo";
import { menuUsuario } from "./src/Menus/menuUsuario"
import { menuAdmin } from "./src/Menus/menuAdmin"

function fazerLogin(username: string, senha:string): Usuario | null{
    const usuario = Usuario.listaUsuarios.find((el) => el.userName===username && el.senha===senha)
    return usuario ?? null
}

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
            const logado = fazerLogin(usernameentrada, senhaentrada)
            if (logado){
                if (logado.verificaAdmin===true){
                    menuAdmin(logado)
                } else {
                    menuUsuario(logado)
                }
            } else {
                console.log("Usuário ou senha incorretos.")
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