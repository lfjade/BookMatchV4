import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { normalizaParaString, normalizaCpf } from "../utils/normalizacao"

export class Usuario{
    protected _id: number
    protected _nome: string
    protected _userName: string
    protected _cpf: string
    protected _senha: string
    protected _verificaAdmin: boolean = false
    protected static contadorId: number=1
    static listaUsuarios: Usuario[]=[]

    constructor (nome: string, userName: string, cpf: string, senha: string, verificaAdmin: boolean) {
        this._id=Usuario.contadorId++
        this._nome=nome
        this._userName=normalizaParaString(userName)
        this._cpf=normalizaCpf(cpf)
        this._senha=senha
        this._verificaAdmin=verificaAdmin
        this.registrar()
    }


    // ----------------------- MÉTODOS DE BUSCA -------------------------

    static procuraUsuarioUsername(userName: string): Usuario | null { 


        const normalizado = normalizaParaString(userName)
        while(!normalizado){
            console.log("O nome de usuário não pode ser vazio. Tente novamente.")
        } // aqui tratou entrada nula; não segue o fluxo do programa enquanto não receber entrada válida
        
        const testeUserName = Usuario.listaUsuarios.find((el) => el._userName === normalizado) // testeUserName é um OBJETO da lista de objetos listaUsuarios
        
        if (testeUserName){
            return testeUserName // retorna o objeto
        } else {
            console.log("Usuário não encontrado.")
            return null
        }        
    }

    static procuraUsuarioCpf(cpf: string): Usuario | null {
        const normalizado = normalizaCpf(cpf)
        
        if(!normalizado){
            console.log("CPF não pode ser um campo vazio.")
            return null
        }

        const testeCpf = Usuario.listaUsuarios.find((el) => el._cpf === normalizado)

        return testeCpf || null

    }

    private registrar(){
        const testeUserName=Usuario.procuraUsuarioUsername(this._userName)
        const testeCpf = Usuario.procuraUsuarioCpf(this._cpf)
        if (!testeUserName && !testeCpf){
            Usuario.listaUsuarios.push(this)
        } else {
            console.log(
                testeUserName && testeCpf? "Nome de usuário e CPF já cadastrados no sistema." : testeUserName ? "Nome de usuário já cadastrado no sistema." : "CPF já cadastrado no sistema."
            )
        }
    }

}