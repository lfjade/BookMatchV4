import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import {normalizaParaNumero, normalizaParaString} from "../utils/"

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

    }

    registrarLocacao(locacao: Locacao){
        if (locacao._livro.disponivel){
            Locacao.listaLocacoes.push(locacao)
            console.log(`Locação registrada com sucesso:`)
            console.log(`Livro: ${locacao._livro.nome} `)
            console.log(`Usuário: ${locacao._usuario.nome} `)
            locacao._livro.disponivel=false
        } else {
            console.log("Livro não disponível para locação.")
        }
    }

    deletarLocacao(locacao:Locacao){
        const indice = Locacao.listaLocacoes.findIndex((el) => el.id===locacao.id)
        if (indice !==-1){
            Locacao.listaLocacoes.splice(indice, 1) 
        }
    }

    // ---------- Métodos de busca ----------- //


    static buscaPorID(id: number | undefined): Locacao[] {
        const normalizado = normalizaParaNumero(id);
        if(!normalizado) return []
        return Locacao.listaLocacoes.filter((el) => String(el._id).includes(String(normalizado)));
        
    }

    static buscaPorUsuario (usuario: string | undefined): Locacao[] {
        const normalizado=normalizaParaString(usuario)
        if (!normalizado) return []

        return Locacao.listaLocacoes.filter((el) => normalizaParaString(el._usuario.nome).includes(normalizado))

    }

    static buscaLocacaoPorLivro(livro: string | undefined): Locacao[]  {
        const normalizado = normalizaParaString(livro)
        if (!normalizado) return []

        return Locacao.listaLocacoes.filter((el) => normalizaParaString(el._livro.nome).includes(normalizado))
    }

    static buscaLocacaoAtiva(): Locacao[]{
        return Locacao.listaLocacoes.filter((el) => el._livro.disponivel===false)
    }

    static buscaLocacoesAtrasadas(): Locacao[] {
        const hoje = new Date();
        return Locacao.listaLocacoes.filter(locacao => 
            locacao._dataDevolvido === null && locacao._previsaoDevolucao < hoje
        );
    }

    static buscaLocacoesConcluidas(): Locacao[] {
        return Locacao.listaLocacoes.filter(locacao => locacao._dataDevolvido !== null);
    } 
    
    //--------- getters --------------
    get id(): number{
        return this._id
    }

    get livro (){
        return this._livro
    }

    get usuario (){
        return this._usuario
    }
    get dataLocacao (){
        return this._dataLocacao
    }
    get previsaoDevolucao(){
        return this._previsaoDevolucao
    }

    get dataDevolvido(): Date | null{
        return this._dataDevolvido? this._dataDevolvido : null
    }

    // ---------- setters -----------
    set id(id:number){
        this._id=id
    }

    set livro(livro: Livro){
        this._livro=livro
    }

    set usuario(usuario:Usuario){
        this._usuario=usuario
    }

    set dataLocacao(dataLocacao: Date ){
        this._dataLocacao=dataLocacao
    }

    set previsaoDevolucao (previsaoDevolucao: Date){
        this._previsaoDevolucao=previsaoDevolucao
    }

    set dataDevolvido(dataDevolvido:Date){
        this._dataDevolvido=dataDevolvido
    }
}

// obs: impedir locações duplicadas, impedir locação de livros já locados, cobrir erros com exceções como testes negativos e entrada invalida de dados