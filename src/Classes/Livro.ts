import { normalizaParaString } from "../utils/normalizacao";
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
        this._nome=normalizaParaString(nome)
        this._autor=normalizaParaString(autor)
        this._generos=generos
        this._editora=normalizaParaString(editora)
        this._edicao=normalizaParaString(edicao)
        this._disponivel=true
        this._dataPublicacao=dataPublicacao
        Livro.listaLivros.push(this)
    }

    procuraLivroNome (nome:string | undefined): Livro[] | null{
        const normalizado = normalizaParaString(nome)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return null
        }
        
        return Livro.listaLivros.filter((el) => el._nome === normalizado) || null
    }

    procuraLivroAutor (autor: string | undefined): Livro[] | null{
        const normalizado = normalizaParaString(autor)

        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return null
        }

        return Livro.listaLivros.filter((el) => el._autor === normalizado) || null
    }

    procuraLivroGenero (genero: string | undefined): Livro[] | null {
        const normalizado=normalizaParaString(genero)
        if (!normalizado){
            console.log("Nome de gênero não pode ser um campo vazio.")
            return null
        }

        const testeLivroGenero = Livro.listaLivros.filter((el) => el._generos.some((generoObjeto) => generoObjeto.nome === normalizado))

        if (testeLivroGenero.length > 0){
            return testeLivroGenero
        } else {
            console.log("Nenhum livro deste gênero foi encontrado.")
            return null
        }
    }

    procuraLivroEditora (editora: string | undefined): Livro[] | null{
        const normalizado = normalizaParaString(editora)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return null
        }

        return Livro.listaLivros.filter((el) => el._editora === normalizado) || null
    }

    procuraLivroEdicao (edicao: string | undefined): Livro[] | null {
        const normalizado = normalizaParaString(edicao)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return null
        }

        return Livro.listaLivros.filter((el)=> el._edicao === normalizado)
    }

    procuraLivroDisponivel(disponivel: boolean): Livro [] | null{ //tratar entrada undefined
        const testeDisponivel = Livro.listaLivros.filter((el)=> el._disponivel=disponivel)
        if (testeDisponivel.length>0){
            return testeDisponivel
        } else {
            console.log(`Nenhum livro com status ${disponivel? "disponível" : "indisponível"} foi encontrado.`)
            return null
        }
    }

    get disponivel (): boolean{
        return this._disponivel
    }
    set disponivel (disponivel:boolean){
        this._disponivel=disponivel
    }
}