import { Locacao } from "../Models/Locacao";
import { exibirMensagem } from "./MensagemView";
import { formataData } from "../utils";

export function exibirLocacao(locacao:Locacao){
    exibirMensagem(`ID: ${locacao.id}\n
        Livro: ${locacao.livro.nome}\n
        Usuário: ${locacao.usuario.nome}\n
        Data da Locação: ${formataData(locacao.dataLocacao)}\n 
        Previsão de Devolução: ${formataData(locacao.previsaoDevolucao)}\n
        Data de devolução: ${formataData(locacao.dataDevolvido)}
        `)
}