import { normalizaParaString } from "../utils/";
import { Genero } from "./Genero";

export class Livro{
    protected _id: number
    protected _nome: string
    protected _autor: string
    protected _generos: Genero[]
    protected _editora: string
    protected _edicao: string
    private _disponivel: boolean
    protected _dataPublicacao: Date
    protected static contadorID: number=1
    static listaLivros: Livro[]=[]

    constructor(nome: string, autor:string, generos:Genero[], editora: string, edicao: string, dataPublicacao:Date){
        this._id=Livro.contadorID++
        this._nome=nome
        this._autor=autor
        this._generos=generos
        this._editora=editora
        this._edicao=edicao
        this._disponivel=true
        this._dataPublicacao=dataPublicacao
    }

    registrarLivro(livro:Livro){
        Livro.listaLivros.push(livro)
    }

    deletarLivro(livro:Livro): boolean{
        const indice = Livro.listaLivros.findIndex((el) => el.id===livro.id)
        if (indice !==-1){
            Livro.listaLivros.splice(indice, 1)
            return true
        } else {
            return false
        }
    }


    // -------------------- MÉTODOS DE BUSCA ------------------
    buscaPorNome (nome:string | undefined): Livro[]{
        const normalizado = normalizaParaString(nome)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return []
        }
        
        return Livro.listaLivros.filter((el) => el._nome === normalizado) || []
    }

    buscaPorAutor (autor: string | undefined): Livro[] {
        const normalizado = normalizaParaString(autor)

        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return []
        }

        return Livro.listaLivros.filter((el) => el._autor === normalizado) || []
    }

    buscaPorGenero (genero: string | undefined): Livro[] {
        const normalizado=normalizaParaString(genero)
        if (!normalizado){
            console.log("Nome de gênero não pode ser um campo vazio.")
            return []
        }

        const testeLivroGenero = Livro.listaLivros.filter((el) => el._generos.some((generoObjeto) => generoObjeto.nome === normalizado))

        if (testeLivroGenero.length > 0){
            return testeLivroGenero
        } else {
            console.log("Nenhum livro deste gênero foi encontrado.")
            return []
        }
    }

    buscaPorEditora (editora: string | undefined): Livro[]{
        const normalizado = normalizaParaString(editora)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return []
        }

        return Livro.listaLivros.filter((el) => el._editora === normalizado) || []
    }

    buscaPorEdicao (edicao: string | undefined): Livro[] {
        const normalizado = normalizaParaString(edicao)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return []
        }

        return Livro.listaLivros.filter((el)=> el._edicao === normalizado)
    }

    buscaPorDisponivel(disponivel: boolean): Livro [] { //tratar entrada undefined
        const testeDisponivel = Livro.listaLivros.filter((el)=> el._disponivel=disponivel)
        if (testeDisponivel.length>0){
            return testeDisponivel
        } else {
            console.log(`Nenhum livro com status ${disponivel? "disponível" : "indisponível"} foi encontrado.`)
            return []
        }
    }

    // --------------- getters ---------------

    get id (): number{
        return this._id
    }

    get nome (): string{
        return this._nome
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