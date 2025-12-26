import { Usuario } from "../Models/Usuario"
import { Livro } from "../Models/Livro"
import * as UsuarioController from "../Controllers/UsuarioController"
import PromptSync from "prompt-sync"
import * as LivroController from "../Controllers/LivroController"
import * as GeneroController from "../Controllers/GeneroController"
import { Genero } from "../Models/Genero";
import { acervo } from "./acervo"
import { formataData, GeneroErros, mensagensPadronizadas, normalizaCpf, normalizaParaNumero } from "../utils"
import { Locacao } from "../Models/Locacao"
const prompt = PromptSync()

export function menuAdmin(usuario: Usuario){
    console.log(`Seja bem vinde, ${usuario.userName}!`)
    let controle = true
    while(controle){
        console.log("1. Registrar Locação")
        console.log("2. Registrar Devolução")
        console.log("3. Ver locações atrasadas")
        console.log("4. Gerenciar Locações")
        console.log("5. Gerenciar Usuários") // novo usuario
        console.log("6. Gerenciar Livros") // novo livro
        console.log("7. Gerenciar Gêneros") // novo genero
        console.log("8. Sair") 
        
        let opcao = Number(prompt("Entre com sua opção: "))

        switch(opcao){
            case 1: // registrar locação
                menuRegistrarLocacao()
                break
            case 2: //registrar devolução
                const locacao = Number(prompt("Entre com o id da locação: "))
                const locacaoEncontrada = Locacao.buscaPorID(locacao)[0]

                if (locacaoEncontrada) {
                    locacaoEncontrada.deletarLocacao(locacaoEncontrada)
                } else {
                    console.log("Nenhuma locação com este ID foi localizada.")
                }
                break
            case 3: // Ver locações atrasadas
                Locacao.buscaLocacoesAtrasadas()
                break
            case 4: // gerenciar locações
                menuGerenciarLocacao()

                break
            case 5: // gerenciar usuários
                menuGerenciarUsuarios()
                break
            case 6: // gerenciar livros
                menuGerenciarLivros()
                break
            case 7: // gerenciar gêneros
                menuGerenciarGeneros()
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

function menuRegistrarLocacao(){
    console.log("Bem vinde ao Registro de Locações!")
    const idUsuario = prompt("ID do usuário: ")
    const usuarioEncontrado = Usuario.buscaPorID(normalizaParaNumero(idUsuario))[0]
    
    const idLivro = prompt("ID do livro: ")
    const livroEncontrado = Livro.buscaPorId(normalizaParaNumero(idLivro))[0]


    if (usuarioEncontrado && livroEncontrado) {

        const locacao = new Locacao(livroEncontrado, usuarioEncontrado)
        locacao.registrarLocacao(locacao)
    } else {
        if (!usuarioEncontrado) {
            console.log("Usuário não encontrado.")
        }
        if (!livroEncontrado) {
            console.log("Livro não encontrado.")
        }

    }


}

function menuGerenciarLocacao() {

    const idLocacao = Number(prompt("Entre com o id da locação: "))
    const locacaoEncontradaDois = Locacao.buscaPorID(idLocacao)[0]

    if (locacaoEncontradaDois) {
        let controle = true

        while (controle) {
            console.log(`Dados da locação:`)
            console.log(`1. Livro: ${locacaoEncontradaDois.livro.nome}`)
            console.log(`2. Usuário: ${locacaoEncontradaDois.usuario.userName}`)
            console.log(`3. Data de Locação: ${locacaoEncontradaDois.dataLocacao}`)
            console.log(`4. Previsão de devolução: ${locacaoEncontradaDois.previsaoDevolucao}`)
            console.log(`5. Devolvido em: ${(locacaoEncontradaDois.dataDevolvido) ? locacaoEncontradaDois.dataDevolvido : "aguardando devolução" }`)
            console.log("6. Cancelar")

            let opcao = Number(prompt("Entre com a sua opção: "))

            switch (opcao) {
                case 1:
                    const idLivro = Number(prompt("ID do livro: "))
                    const livroEncontrado = Livro.buscaPorId(idLivro)[0]

                    if (livroEncontrado) {
                        locacaoEncontradaDois.livro=livroEncontrado
                        console.log("Livro atualizado com sucesso!")
                    } else {
                        console.log("Livro não localizado.")
                    }

                    break
                case 2:
                    const idUsuario = Number(prompt("ID do usuário: "))
                    const usuarioEncontrado = Usuario.buscaPorID(idUsuario)[0]

                    if (usuarioEncontrado) {
                        locacaoEncontradaDois.usuario=usuarioEncontrado
                        console.log("Usuário atualizado com sucesso.")
                    } else {
                        console.log("Usuário não localizado. ")
                    }
                    break
                case 3:
                    console.log("Nova data de locação: ")
                    let dia = Number(prompt("dia: "))
                    let mes = Number(prompt("mês: "))
                    let ano = Number(prompt("ano: "))

                    let hora = Number(prompt("hora: ")) // default
                    let minuto = Number(prompt("minuto: ")) // default
                    let segundo = Number(prompt("segundo: ")) // default

                    let novadata = new Date(ano, mes-1, dia)
                    locacaoEncontradaDois.dataLocacao = novadata
                    console.log("data atualizada com sucesso!")
                    break
                case 4:
                    console.log("Nova previsão de devolução: ")
                     dia = Number(prompt("dia: "))
                     mes = Number(prompt("mês: "))
                     ano = Number(prompt("ano: "))

                    //  hora = Number(prompt("hora: ")) 
                    //  minuto = Number(prompt("minuto: ")) 
                    //  segundo = Number(prompt("segundo: "))

                     novadata = new Date(ano, mes - 1, dia)
                     locacaoEncontradaDois.previsaoDevolucao = novadata

                     console.log("Previsão de devolução atualizada com sucesso.")
                    break
                case 5:
                    console.log("Atualizar data de devolução: ")
                     dia = Number(prompt("dia: "))
                     mes = Number(prompt("mês: "))
                     ano = Number(prompt("ano: "))

                     hora = Number(prompt("hora: ")) // default
                     minuto = Number(prompt("minuto: ")) // default
                     segundo = Number(prompt("segundo: ")) // default

                     novadata = new Date(`${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`)
                     locacaoEncontradaDois.dataDevolvido = novadata

                     console.log("Data de devolução atualizada com sucesso.")

                    break
                case 6:
                    controle = false
                    break
                default:
                    console.log("Opção não reconhecida.")
            }
        }

    } else {
        console.log("Locação não encontrada.")
    }
}

function menuGerenciarUsuarios () {

    console.log("Bem vinde ao Gerenciamento de Usuários.")
    console.log("1. Novo usuário")
    console.log("2. Editar usuário")
    console.log("3. Excluir usuário")
    console.log("4. sair")
    let controle = true

    while (controle){
        let opcao = Number(prompt("Entre com a sua opção: "))
        switch (opcao) {
            case 1: // novo usuario
                console.log("Criando novo usuário")
                let nome = prompt("Nome: ")
                let username = prompt("Username: ")
                let cpf = prompt ("CPF")
                let senha = prompt("senha")
                let admin = prompt ("1. Usuário comum / 2. Administrador")
                let verificaAdmin = false
                if (admin === '2') {
                    verificaAdmin=true
                }

                const novoUsuario = new Usuario(nome, username, cpf, senha, verificaAdmin)

                Usuario.registrarUsuario(novoUsuario)
                
                break
            case 2: // editar usuario
                const idUsuario = Number(prompt("Entre com o ID do usuário: "))
                const usuarioEncontrado = Usuario.buscaPorID(idUsuario)[0]

                if (usuarioEncontrado) {

                    let controle = true
                    while(controle){
                        console.log(`1. Nome: ${usuarioEncontrado.nome}`)
                        console.log(`2. Username: ${usuarioEncontrado.userName}`)
                        console.log(`3. CPF: ${usuarioEncontrado.cpf}`)
                        console.log(`4. Senha: xxxxxx `)
                        console.log(`5. Admin: ${usuarioEncontrado.verificaAdmin}`)
                        console.log("6. Sair")
                    
                        let opcao = Number(prompt("Entre com a opção: "))
                        switch (opcao) {
                            case 1: //edita nome
                                const novoNome = prompt("Novo nome: ")
                                console.log(`Confirmar novo nome? ${novoNome} `)
                                const confirmadois = prompt ("S. sim - N. não")
                                if (confirmadois === "S" ) {
                                    usuarioEncontrado.nome = novoNome
                                    console.log ("Nome atualizado!")
                                } else if (confirmadois === "N") {
                                    console.log("Atualização cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                break
                            case 2: //edita username
                                const novoUsername = prompt ("Novo username: ")
                                console.log(`Confirmar novo username? ${novoUsername}`)
                                const confirmatres = prompt ("S. sim - N. não")
                                if (confirmatres==='S'){
                                    usuarioEncontrado.userName = novoUsername
                                    console.log("Username atualizado com sucesso.")
                                } else if (confirmatres === 'N') {
                                    console.log("Atualização cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                
                                break
                            case 3: //edita cpf
                                const novoCpf = prompt("Novo CPF:")
                                console.log(`Confirmar novo CPF? ${novoCpf}`)
                                const confirmaQuatro = prompt ("S. sim - N. não")
                                if (confirmaQuatro === 'S'){
                                    usuarioEncontrado.cpf = normalizaCpf(novoCpf)
                                    console.log("CPF atualizado com sucesso.")
                                } else if (confirmaQuatro === 'N') {
                                    console.log("Atualização cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                break
                            case 4: //edita senha
                                const novaSenha = prompt("Nova senha: ")
                                console.log("Confirmar nova senha? ")
                                const confirmaCinco = prompt ("S. sim - N. não")
                                if (confirmaCinco === 'S') {
                                    usuarioEncontrado.senha = novaSenha
                                    console.log("Senha atualizada com sucesso.")
                                } else  if (confirmaCinco === 'N'){
                                    console.log("Atualização cancelada.")
                                } else {
                                    console.log("Opção não reconhecida.")
                                }
                                break
                            case 5: // edita admin
                                console.log (`Status da conta: ${(usuarioEncontrado.verificaAdmin) ? "Administrador" : "Usuário comum"}`)
                                console.log("1. Usuário Comum")
                                console.log("2. Administrador")
                                let novoControle = Number(prompt("Novo status de usuário: "))
                                    if (novoControle === 1){
                                        usuarioEncontrado.verificaAdmin = false
                                        console.log("Status do usuário atualizado para Usuário Comum.")
                                    } else if (novoControle === 2) {
                                        usuarioEncontrado.verificaAdmin = true
                                        console.log("Status do usuário atualizado para Administrador.")
                                    } else {
                                        console.log("Opção não reconhecida.")
                                    }
                                break
                            case 6:
                                controle = false
                                console.log("Saindo do menu.")
                                break
                            default:
                                console.log("Opção não reconhecida.")
                                break
                        }
                    }
                    
                } else {
                    console.log("Usuário não encontrado.")
                }
                break
            case 3: // excluir usuário
                console.log("Excluindo usuário")
                let id = Number(prompt("Entre com o id de usuario: "))
                let usuarioEncontado = Usuario.buscaPorID(id)[0]
                    if (usuarioEncontado) {
                        Usuario.deletarUsuarioPorId(id)
                        console.log("Usuário excluído com sucesso.")
                    } else {
                        console.log("Não foi possível localizar um usuário com este ID.")
                    }
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

function menuGerenciarLivros() {
    console.log("Bem vinde ao Gerenciamento de Livros.")
    console.log("1. Novo livro")
    console.log("2. Editar livro")
    console.log("3. Excluir livro")
    console.log("4. Sair")
    let controle = true

    while (controle) {
        const opcao = Number(prompt("Entre com sua opção: "))

        switch (opcao) {
            case 1: // novo livro
                console.log("Novo Livro")
                const nome = prompt("Nome: ")
                const isbn = Number(prompt("ISBN: "))
                const autor = prompt("Autor: ")
                console.log("Gêneros disponíveis: ")
                GeneroController.exibirGeneros(Genero.listaGeneros, mensagensPadronizadas.Genero[GeneroErros.GENERO_NAO_ENCONTRADO])
                // certo, aqui os gêneros estão sendo listados. agora preciso criar uma maneira de que a pessoa possa continuar
                // proximo passo: número registra gênero, através do id
                // o cara digita o id e enter e tem que registrar
                const generosSelecionados: Genero[]=[]
                let continuar = true
                while (continuar) {
                    const entrada = prompt ("Digite o id do Gênero (ou Enter pra finalizar): ")

                    if (!entrada) break
                    
                    const idGenero = Number(entrada)
                    if (isNaN(idGenero)) {
                        console.log("ID inválido.")
                        continue
                    }

                    const generoEncontrado = Genero.buscaPorID(idGenero)[0]
                    if (!generoEncontrado){
                        console.log(mensagensPadronizadas.Genero[GeneroErros.GENERO_NAO_ENCONTRADO])
                        continue
                    }

                    if (generosSelecionados.some(g => g.id === generoEncontrado.id)){
                        console.log("Gênero já adicionado.")
                        continue
                    }
                    generosSelecionados.push(generoEncontrado)

                    const resposta = prompt("Deseja adicionar outro gênero? (s/n)")
                    continuar=resposta?.toLowerCase()==='s'
                }


                const editora = prompt("Editora:")
                const edicao = prompt("Edição: ")
                console.log("Data de publicação: ")
                const dia = Number(prompt("Dia: "))
                const mes = Number(prompt("Mês: "))
                const ano = Number(prompt("Ano: "))
                const dataPublicacao = new Date (ano, mes-1, dia)

                const novoLivro = new Livro(
                    nome,
                    isbn,
                    autor,
                    generosSelecionados,
                    editora,
                    edicao,
                    dataPublicacao
                )
                Livro.registrarLivro(novoLivro)

                console.log("Livro cadastrado com sucesso!")

                break
            case 2: // editar livro
                console.log("Editar livro")

                const idLivro = Number(prompt("ID do livro: "))
                const livroEncontrado = Livro.buscaPorId(idLivro)[0]
                if (!livroEncontrado) {
                    console.log("Livro não encontrado.")
                    break
                }

                console.log("Dados do livro: ")
                LivroController.exibirPorID(livroEncontrado.id)
                console.log("Editar: ")
                console.log("1. Nome")
                console.log("2. ISBN")
                console.log("3. Autor")
                console.log("4. Gêneros")
                console.log("5. Editora")
                console.log("6. Edição")
                console.log("7. Disponível")
                console.log("8. Data de publicação")
                console.log("9. Cancelar")

                
                let continuarEdicao = true
                while (continuarEdicao) {
                    const opcao = Number(prompt("Entre com sua opção: "))
                    switch (opcao){
                        case 1:
                            let novoNome = prompt("Nome: ")
                            livroEncontrado.nome = novoNome
                            console.log("Nome atualizado com sucesso.")
                            break
                        case 2:
                            let novoIsbn = Number(prompt("ISBN: "))
                            livroEncontrado.isbn=novoIsbn
                            console.log("ISBN atualizado com sucesso.")
                            break
                        case 3:
                            let novoAutor = prompt("Autor: ")
                            livroEncontrado.autor=novoAutor
                            console.log("Autor atualizado com sucesso.")
                            break
                        case 4: // generos
                            console.log("Gêneros disponíveis: ")
                            GeneroController.exibirGeneros(Genero.listaGeneros, mensagensPadronizadas.Genero[GeneroErros.GENERO_NAO_ENCONTRADO])
                            const generosSelecionados: Genero[]=[]
                            let continuar = true
                            while (continuar) {
                                const entrada = prompt ("Digite o id do Gênero (ou Enter pra finalizar): ")

                                if (!entrada) break
                                
                                const idGenero = Number(entrada)
                                if (isNaN(idGenero)) {
                                    console.log("ID inválido.")
                                    continue
                                }

                                const generoEncontrado = Genero.buscaPorID(idGenero)[0]
                                if (!generoEncontrado){
                                    console.log(mensagensPadronizadas.Genero[GeneroErros.GENERO_NAO_ENCONTRADO])
                                    continue
                                }

                                if (generosSelecionados.some(g => g.id === generoEncontrado.id)){
                                    console.log("Gênero já adicionado.")
                                    continue
                                }
                                generosSelecionados.push(generoEncontrado)

                                const resposta = prompt("Deseja adicionar outro gênero? (s/n)")
                                continuar=resposta?.toLowerCase()==='s'
                            }
                            
                            livroEncontrado.generos=generosSelecionados

                            console.log("Gêneros atualizados com sucesso.")
                            break
                        case 5:
                            let novaEditora = prompt("Editora: ")
                            livroEncontrado.editora = novaEditora
                            console.log("Editora atualizada com sucesso.")
                            break
                        case 6:
                            let novaEdicao = prompt("Edição: ")
                            livroEncontrado.edicao = novaEdicao
                            console.log("Edição atualizada com sucesso.")
                            break
                        case 7: // disponivel
                            console.log("1. Livro disponível")
                            console.log("2. Livro indisponível")
                            console.log("3. Cancelar")
                            let control = true
                            while (control){
                                const opcao = Number(prompt("Entre com a sua opção: "))
                                switch (opcao){
                                    case 1:
                                        livroEncontrado.disponivel=true
                                        console.log("Disponibilidade ajustada para: disponível.")
                                        break
                                    case 2:
                                        livroEncontrado.disponivel=false
                                        console.log("Disponibilidade ajustada para: indisponível.")
                                        break
                                    case 3:
                                        console.log("Operação cancelada.")
                                        control = false
                                        break
                                    default:
                                        console.log("Opção não reconhecida.")
                                        break
                                }
                            }
                        break
                        case 8: // data de publicação
                            console.log(`Data atual: ${formataData(livroEncontrado.dataPublicacao)}`)
                            console.log("Nova data: ")
                            const dia = Number(prompt("Dia: "))
                            const mes = Number(prompt("Mês: "))
                            const ano = Number(prompt("Ano: "))
                            const dataPublicacao = new Date (ano, mes-1, dia)

                            livroEncontrado.dataPublicacao=dataPublicacao
                            console.log("Data de publicação atualizada com sucesso.")

                            break
                        case 9:
                            console.log("Saindo...")
                            continuarEdicao=false
                            break
                        default:
                            console.log("Opção não reconhecida.")
                            break

                    }
                }
            
                break
            case 3: // excluir livro
                const id = Number(prompt("Informe o ID do livro que deseja excluir: "))

                const lEncontrado = Livro.buscaPorId(id)[0]

                if (lEncontrado) {
                    Livro.deletarLivroPorID(id)
                        console.log("Livro excluído com sucesso.")
                    } else {
                        console.log("Não foi possível localizar um livro com este ID.")
                    }
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

function menuGerenciarGeneros() {
    console.log("Bem vinde ao menu de gerenciamento de gêneros.")
    console.log("1. Novo gênero")
    console.log("2. Editar gênero")
    console.log("3. Excluir gênero")
    console.log("4. Sair")
    let controle = true

    while(controle){
        const opcao = Number(prompt("Entre com a sua opção: "))

        switch (opcao){
            case 1: // novo genero
                const nome = prompt("Novo gênero: ")
                const novoGenero = new Genero(nome)
                Genero.registrarGenero(novoGenero)
                console.log("Gênero cadastrado com sucesso.")
                break
            case 2: //editar genero
                const idGenero = Number(prompt("Entre com o ID do gênero que deseja editar:"))
                const generoEncontrado = Genero.buscaPorID(idGenero)[0]
                if (generoEncontrado){
                    console.log(`Nome: ${generoEncontrado.nome}`)
                    const novoNome = prompt("Entre com o novo nome: ")
                    generoEncontrado.nome=novoNome
                    console.log("Gênero atualizado com sucesso.")
                } else {
                    console.log("Gênero não encontrado.")
                }
                
                break
            case 3: //excluir genero
                const idGen = Number(prompt("Entre com o ID do gênero que deseja excluir:"))
                const genEncontrado = Genero.buscaPorID(idGen)[0]

                if (genEncontrado){
                    const confir = Number(prompt(`Confirmar exclusão do gênero ${genEncontrado.nome}? 1 - sim / 2 - não`))
                    if (confir===1){
                        Genero.deletarGenero(genEncontrado)
                        console.log("Gênero excluído com sucesso.")
                    } else if (confir===2){
                        console.log("Operação cancelada.")
                    } else {
                        console.log("Opção não reconhecida.")
                    }

                }
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