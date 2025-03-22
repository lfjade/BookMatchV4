import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import {normalizaParaNumero} from "../utils/normalizacao"

export class Locacao {
    protected _id: number
    protected _livro: Livro
    protected _usuario: Usuario
    protected _dataLocacao: Date
    protected _previsaoDevolucao: Date
    protected _dataDevolvido: Date | null
    protected static contadorID: number = 1
    static listaLocacoes: Locacao[]=[]

    constructor (livro: Livro, usuario: Usuario){
        this._id=Locacao.contadorID++
        this._livro=livro
        this._usuario=usuario
        this._dataLocacao= new Date()
        this._previsaoDevolucao = new Date (this._dataLocacao)
        this._previsaoDevolucao.setDate(this._dataLocacao.getDate()+14)
        this._dataDevolvido = null

        if (this._livro.disponivel){
            Locacao.listaLocacoes.push(this)
            console.log("Locação registrada com sucesso.")
            this._livro.disponivel=false
        } else {
            console.log("Livro não disponível para locação.")
        }
    }

    // ---------- Métodos de busca ----------- //

    buscaLocacaoPorID(id: number | undefined): Locacao | null {
        const normalizado = normalizaParaNumero(id)
        return Locacao.listaLocacoes.find((el) => el._id===normalizado) || null
    }

    buscaLocacaoPorUsuario(usuario: Usuario | undefined): Locacao[] | null{
        return Locacao.listaLocacoes.filter((el) => el._usuario === usuario) || null
    }

    buscaLocacaoPorLivro(livro: Livro | undefined): Locacao[] | null {
        return Locacao.listaLocacoes.filter((el) => el._livro === livro) || null
    }

    buscaLocacaoAtiva(): Locacao[]{
        return Locacao.listaLocacoes.filter((el) => el._livro.disponivel===false) || null
    }

    buscaLocacoesAtrasadas(): Locacao[] {
        const hoje = new Date();
        return Locacao.listaLocacoes.filter(locacao => 
            locacao._dataDevolvido === null && locacao._previsaoDevolucao < hoje
        );
    }

    buscaLocacoesConcluidas(): Locacao[] {
        return Locacao.listaLocacoes.filter(locacao => locacao._dataDevolvido !== null);
    }
    
}