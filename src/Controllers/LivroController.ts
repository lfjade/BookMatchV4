import { Livro } from "../Models/Livro";
import { exibirLivro } from "../Views/LivroView";
import { exibirMensagem } from "../Views/MensagemView";
import { LivroErros } from "../utils";

function exibirLivros (livros: Livro[], mensagemNaoEcontrado:string){
    if (livros.length===0){
        exibirMensagem(mensagemNaoEcontrado, "Livro")
    } else {
        livros.forEach(exibirLivro)
    }
}

export function exibirTodos(){
    Livro.listaLivros.forEach(exibirLivro)

}

export function exibirPorID(id:number){
    exibirLivros(Livro.buscaPorId(id), LivroErros.LIVRO_NAO_ENCONTRADO)
}
export function exibirPorNome (nome:string){
    exibirLivros(Livro.buscaPorNome(nome), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorIsbn(isbn: number){
    exibirLivros(Livro.buscaPorISBN(isbn), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorAutor(autor:string){
    exibirLivros(Livro.buscaPorAutor(autor), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorEditora(editora: string){
    exibirLivros(Livro.buscaPorEditora(editora), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorEdicao(edicao: string){
    exibirLivros(Livro.buscaPorEdicao(edicao), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorGenero (genero: string){
    exibirLivros(Livro.buscaPorGenero(genero), LivroErros.LIVRO_NAO_ENCONTRADO)
}

export function exibirPorDisponivel(disponivel:boolean){
    exibirLivros(Livro.buscaPorDisponivel(disponivel), LivroErros.LIVRO_NAO_ENCONTRADO)
}
