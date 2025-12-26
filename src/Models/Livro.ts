import { normalizaParaNumero, normalizaParaString } from "../utils/";
import { Genero } from "./Genero";
import { LivroErros } from "../utils/";

export class Livro{
    protected _id: number
    protected _nome: string
    protected _isbn: number
    protected _autor: string
    protected _generos: Genero[]
    protected _editora: string
    protected _edicao: string
    private _disponivel: boolean
    protected _dataPublicacao: Date
    protected static contadorID: number=1
    static listaLivros: Livro[]=[]

    constructor(nome: string, isbn:number, autor:string, generos:Genero[], editora: string, edicao: string, dataPublicacao:Date){
        this._id=Livro.contadorID++
        this._nome=nome
        this._isbn=isbn
        this._autor=autor
        this._generos=generos
        this._editora=editora
        this._edicao=edicao
        this._disponivel=true
        this._dataPublicacao=dataPublicacao
    }

    static registrarLivro(livro:Livro): {sucesso:boolean, erro?:LivroErros} {
        const testeIsbn=Livro.buscaPorISBN(livro._isbn)
        if (testeIsbn.length>0){
            return {sucesso:false, erro: LivroErros.LIVRO_DUPLICADO}
        }
        Livro.listaLivros.push(livro)
        console.log(`Livro registrado com sucesso: ${livro._nome}`)
        return {sucesso:true}
    }

    static deletarLivroPorID(id:number): boolean{
        const indice = Livro.listaLivros.findIndex((el) => el.id===id)
        if (indice !==-1){
            Livro.listaLivros.splice(indice, 1)
            return true
        } else {
            return false
        }
    }


    // -------------------- MÉTODOS DE BUSCA ------------------
    static buscaPorId(id:number | undefined): Livro[]{
        const normalizado = normalizaParaNumero(id)
        if (!normalizado) return []

        return Livro.listaLivros.filter((el) => String(el._id).includes(String(normalizado)))

    }

    static buscaPorNome (nome:string | undefined): Livro[]{
        const normalizado = normalizaParaString(nome)
        if (!normalizado) return []
        
        return Livro.listaLivros.filter((el) => normalizaParaString(el._nome).includes(normalizado))
    }

    static buscaPorISBN (isbn:number | undefined): Livro[]{
        const normalizado = normalizaParaNumero(isbn)

        if(!normalizado) return []

        return Livro.listaLivros.filter((el)=> String(el._isbn).includes(String(normalizado)))

    }

    static buscaPorAutor (autor: string | undefined): Livro[] {
        const normalizado = normalizaParaString(autor)

        if (!normalizado) return []

        return Livro.listaLivros.filter((el) => normalizaParaString(el._autor).includes(normalizado))

    }

    static buscaPorGenero (genero: string | undefined): Livro[] {
        const normalizado=normalizaParaString(genero)
        if (!normalizado) return []

        return Livro.listaLivros.filter((el) => el._generos.some((generoObjeto) => normalizaParaString(generoObjeto.nome).includes(normalizado)))

    }

    static buscaPorEditora (editora: string | undefined): Livro[]{
        const normalizado = normalizaParaString(editora)
        if (!normalizado) return []

        return Livro.listaLivros.filter((el) => normalizaParaString(el._editora).includes(normalizado))

    }

    static buscaPorEdicao (edicao: string | undefined): Livro[] {
        const normalizado = normalizaParaString(edicao)
        if (!normalizado) return []

        return Livro.listaLivros.filter((el)=> normalizaParaString(el._edicao).includes(normalizado))
    }

    static buscaPorDisponivel(disponivel: boolean | undefined): Livro [] { 
        if (disponivel === undefined) return []
        return Livro.listaLivros.filter((el)=> el._disponivel===disponivel)
            
    }

    // --------------- getters ---------------

    get id (): number{
        return this._id
    }

    get nome (): string{
        return this._nome
    }

    get isbn():number{
        return this._isbn
    }

    get autor (): string{
        return this._autor
    }

    get generos(): Genero[]{
        return this._generos
    }

    get editora(): string{
        return this._editora
    }

    get edicao(): string{
        return this._edicao
    }
    get disponivel (): boolean{
        return this._disponivel
    }

    get dataPublicacao(): Date{
        return this._dataPublicacao
    }

    // ---------------- setters --------------
    set id (id:number){
        this._id=id
    }

    set nome (nome:string){
        this._nome=nome
    }

    set isbn(isbn:number){
        this._isbn=isbn
    }

    set autor (autor:string){
        this._autor=autor
    }

    set generos (generos: Genero[]){
        this._generos=generos
    }

    set editora (editora: string){
        this._editora=editora
    }

    set edicao (edicao: string){
        this._edicao=edicao
    }

    set disponivel (disponivel:boolean){
        this._disponivel=disponivel
    }

    set dataPublicacao(dataPublicacao:Date){
        this._dataPublicacao=dataPublicacao
    }
}