import { Livro } from "../Models/Livro";
import { exibirMensagem } from "./MensagemView";
import { formataData } from "../utils";

export function exibirLivro(livro:Livro){
    exibirMensagem(`ID: ${livro.id}\n
        Nome: ${livro.nome}\n
        ISBN: ${livro.isbn}\n
        Autor: ${livro.autor}\n
        Gêneros: ${livro.generos.map((el)=> el.nome).join(", ")}\n
        Editora: ${livro.editora}\n
        Edição: ${livro.edicao}\n
        Disponível: ${livro.disponivel? "Sim" : "Não"}\n
        Data de Publicação: ${formataData(livro.dataPublicacao)}`)
}