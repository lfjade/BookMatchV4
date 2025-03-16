import { normalizaParaString } from "../utils/normalizacao";
import { Genero } from "./Genero";

export class Livro{
    protected _id: number
    protected _nome: string
    protected _autor: string
    protected _generos: Genero[]
    protected _editora: string
    protected _edicao: string
    protected _disponivel: boolean
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

    // procuraLivroGenero

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

    // procuraLivroDisponivel

    //procuraLivroDataPublicacao
}