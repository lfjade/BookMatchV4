import { normalizaParaString } from "../utils/normalizacao"

export class Genero {
    protected _id: number
    protected _nome: string
    protected static contadorID: number = 1
    static listaGeneros: Genero[]=[]

    constructor (nome:string){
        this._id=Genero.contadorID++
        this._nome=normalizaParaString(nome)
        this.registrar()
    }

    private registrar(){
        const testeGenero=this.procuraGeneroNome(this._nome)
        if (!testeGenero){
            Genero.listaGeneros.push(this)
            console.log("Gênero cadastrado.")
        } else {
            console.log("Gênero já cadastrado.")
        }
    }

    procuraGeneroNome(nome:string | undefined): Genero[] | null{
        const normalizado = normalizaParaString(nome)
        if (!normalizado){
            console.log("Nome não pode ser um campo vazio.")
            return null
        }
        return Genero.listaGeneros.filter((el) => el._nome === normalizado) || null
        
    }

    get nome (): string{
        return this._nome
    }
}

//amplição: utilizar o módulo assert para testes 