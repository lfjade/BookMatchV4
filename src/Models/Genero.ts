import { GeneroErros } from "../utils"
import { normalizaParaNumero, normalizaParaString } from "../utils/normalizacao"

export class Genero {
    protected _id: number
    protected _nome: string
    protected static contadorID: number = 1
    static listaGeneros: Genero[]=[]

    constructor (nome:string){
        this._id=Genero.contadorID++
        this._nome=nome
    }

    static registrarGenero(genero: Genero): {sucesso: boolean, erro?: GeneroErros}{
        const testeGenero=Genero.buscaPorNome(genero._nome)
        if (testeGenero.length>0){
            return {sucesso: false, erro: GeneroErros.GENERO_DUPLICADO}
        } else {
            Genero.listaGeneros.push(genero)
            return {sucesso: true}
        }
    }
    static deletarGenero(genero:Genero): boolean{
            const indice = Genero.listaGeneros.findIndex((el) => el.id===genero.id)
            if (indice !==-1){
                Genero.listaGeneros.splice(indice, 1)
                return true
            } else {
                return false
            }
        }
        
    static buscaPorNome (nome:string | undefined): Genero[] {
        const normalizado = normalizaParaString(nome)
        if (!normalizado) return []
        return Genero.listaGeneros.filter((el) => normalizaParaString(el._nome).includes(normalizado))

    }

    static buscaPorID(id:number | undefined): Genero[]{
        const normalizado = normalizaParaNumero(id)
        if (!normalizado) return []
        return Genero.listaGeneros.filter((el) => String(el._id).includes(String(normalizado)))
    }

    // ----------------- getters ---------------

    get id (): number{
        return this._id
    }

    get nome (): string{
        return this._nome
    }

    // --------------- setters --------------
    set id(id:number){
        this._id=id
    }

    set nome (nome:string){
        this._nome=nome
    }
}

//amplição: utilizar o módulo assert para testes 