import { normalizaParaNumero, normalizaParaString } from "../utils/";
import { Genero } from "./Genero";
import { LivroErros } from "../utils/";
import { exibirMensagem } from "../Views/MensagemView";

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

    static registrarLivro(livro:Livro){
        Livro.listaLivros.push(livro)
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
        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }

        const resultado = Livro.listaLivros.filter((el) => String(el._id).includes(String(normalizado)))

        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
        return resultado
    }

    static buscaPorNome (nome:string | undefined): Livro[]{
        const normalizado = normalizaParaString(nome)
        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }
        
        const resultado = Livro.listaLivros.filter((el) => el._nome.includes(normalizado))

        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
        return resultado
    }

    static buscaPorAutor (autor: string | undefined): Livro[] {
        const normalizado = normalizaParaString(autor)

        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }

        const resultado = Livro.listaLivros.filter((el) => el._autor.includes(normalizado))
        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
        return resultado
    }

    static buscaPorGenero (genero: string | undefined): Livro[] {
        const normalizado=normalizaParaString(genero)
        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }

        const resultado = Livro.listaLivros.filter((el) => el._generos.some((generoObjeto) => generoObjeto.nome.includes(normalizado)))

        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
            return resultado
    }

    static buscaPorEditora (editora: string | undefined): Livro[]{
        const normalizado = normalizaParaString(editora)
        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }

        const resultado = Livro.listaLivros.filter((el) => el._editora.includes(normalizado))

        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
        return resultado
    }

    static buscaPorEdicao (edicao: string | undefined): Livro[] {
        const normalizado = normalizaParaString(edicao)
        if (!normalizado){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        }

        const resultado = Livro.listaLivros.filter((el)=> el._edicao.includes(normalizado))

        if (resultado.length===0){
            exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
            return []
        }
        return resultado
    }

    static buscaPorDisponivel(disponivel: boolean | undefined): Livro [] { 
        if (disponivel === undefined){
            exibirMensagem(LivroErros.CAMPO_DE_BUSCA_VAZIO, "Livro")
            return []
        } else {
            const testeDisponivel = Livro.listaLivros.filter((el)=> el._disponivel===disponivel)
            if (testeDisponivel.length===0){
                exibirMensagem(LivroErros.LIVRO_NAO_ENCONTRADO, "Livro")
                return []
            } else {
                return testeDisponivel
            } 
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