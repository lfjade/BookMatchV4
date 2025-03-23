import { normalizaParaString } from "../utils/normalizacao"

export class Genero {
    protected _id: number
    protected _nome: string
    protected static contadorID: number = 1
    static listaGeneros: Genero[]=[]

    constructor (nome:string){
        this._id=Genero.contadorID++
        this._nome=normalizaParaString(nome)
    }

    registrarGenero(genero: Genero){
        const testeGenero=this.procuraGeneroNome(genero._nome)
        if (!testeGenero){
            Genero.listaGeneros.push(genero)
            console.log("Gênero cadastrado.")
        } else {
            console.log("Gênero já cadastrado.")
        }
    }
    deletarGenero(genero:Genero){
            const indice = Genero.listaGeneros.findIndex((el) => el.id===genero.id)
            if (indice !==-1){
                Genero.listaGeneros.splice(indice, 1) 
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