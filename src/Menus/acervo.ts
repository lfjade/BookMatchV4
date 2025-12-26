import * as LivroController from "../Controllers/LivroController"
import PromptSync from "prompt-sync"
const prompt = PromptSync()

export function acervo(){
    console.log("Seja bem vindo ao acervo!")
    let controle=true
    while(controle){
        console.log("1. Exibir tudo")
        console.log("2. Pesquisar")
        console.log("3. Sair")
        const opcao = Number(prompt("Entre com sua opção: "))

        switch(opcao){
            case 1:
                LivroController.exibirTodos()
                break
            case 2:
                
                let controle = true
                while(controle){
                    console.log("1. Pesquisa por ID")
                    console.log("2. Pesquisa por Nome")
                    console.log("3. Pesquisa por ISBN")
                    console.log("4. Pesquisa por Autor")
                    console.log("5. Pesquisa por Gênero")
                    console.log("6. Pesquisa por Editora")
                    console.log("7. Pesquisa por Edição")
                    console.log("8. Pesquisa por Livros Disponíveis para Locação: ")
                    console.log("9. Sair")
                    const opcao = Number(prompt("Entre com sua opção: "))
                    
                    switch (opcao){
                        case 1: // pesquisa por ID
                            const id = Number(prompt("Entre com o ID: "))
                            LivroController.exibirPorID(id)
                            break
                        case 2:// pesquisa por nome
                            const nome = String(prompt("Entre com o nome: "))
                            LivroController.exibirPorNome(nome)
                            break
                        case 3: // pesquisa por isbn
                            const isbn = Number(prompt("Entre com o ISBN: "))
                            LivroController.exibirPorIsbn(isbn)
                            break
                        case 4: // pesquisa por autor
                            const autor = String(prompt("Entre com o autor: "))
                            LivroController.exibirPorAutor(autor)
                            break
                        case 5: // pesquisa por genero
                            const genero = String(prompt("Entre com o gênero: "))
                            LivroController.exibirPorGenero(genero)
                            break
                        case 6: // pesquisa por editora
                            const editora = String(prompt("Entre com a editora: "))
                            LivroController.exibirPorEditora(editora)
                            break
                        case 7: //pesquisa por edicao
                            const edicao = String(prompt("Entre com a edição: "))
                            LivroController.exibirPorEdicao(edicao)
                            break
                        case 8: // pesquisa por disponivel
                            LivroController.exibirPorDisponivel(true)
                            break
                        case 9:
                            console.log("Saindo...")
                            controle = false
                            break
                        default:
                            console.log("Opção não reconhecida.")
                            break
                    }

                }
                break
            case 3:
                console.log("Saindo...")
                controle = false
                break
            default:
                console.log("Opção não reconhecida.")
                break
        }
    }
}