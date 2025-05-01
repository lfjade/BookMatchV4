import { Locacao } from "../Models/Locacao";
import { exibirLocacao } from "../Views/LocacaoView";
import { exibirMensagem } from "../Views/MensagemView";
import { LocacaoErros } from "../utils";

function exibirLocacoes (locacoes:Locacao[], mensagemNaoEcontrado:string){
    if (locacoes.length === 0){
        exibirMensagem(mensagemNaoEcontrado, "Locacao")
    } else {
        locacoes.forEach(exibirLocacao)
    }
}

export function exibirPorId (id:number){
    exibirLocacoes(Locacao.buscaPorID(id), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}

export function exibirPorUsuario (usuario:string){
    exibirLocacoes(Locacao.buscaPorUsuario(usuario), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}

export function exibirPorLivro (livro:string){
    exibirLocacoes(Locacao.buscaLocacaoPorLivro(livro), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}

export function exibirPorAtivas (){
    exibirLocacoes(Locacao.buscaLocacaoAtiva(), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}

export function exibirPorAtrasadas(){
    exibirLocacoes(Locacao.buscaLocacoesAtrasadas(), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}
export function exibirPorConcluidas(){
    exibirLocacoes(Locacao.buscaLocacoesConcluidas(), LocacaoErros.LOCACAO_NAO_ENCONTRADA)
}
