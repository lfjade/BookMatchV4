import PromptSync from "prompt-sync"
const prompt = PromptSync()

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
        this._userName=userName
        this._cpf=cpf
        this._senha=senha
        this._verificaAdmin=verificaAdmin
        this.registrar()
    }


    // -------------------- NORMALIZAÇÕES --------------------------------
    static normalizaParaString(string: any): string{
        const normalizado = String(string).trim().toLowerCase()
        return normalizado
    }

    static normalizaCpf(cpf: any): string{
        const cpfNormalizado = String(cpf).trim().replace(/\D/g, "")
        return cpfNormalizado
    }

    // ----------------------- MÉTODOS DE BUSCA -------------------------

    static procuraUsuarioUsername(userName: string): Usuario | null { 

        const normalizado = Usuario.normalizaParaString(userName)
        while(!normalizado){
            console.log("O nome de usuário não pode ser vazio. Tente novamente.")
        } // aqui tratou entrada nula; não segue o fluxo do programa enquanto não receber entrada válida
        
        const testeUserName = Usuario.listaUsuarios.find((el) => Usuario.normalizaParaString(el._userName) === normalizado) // testeUserName é um OBJETO da lista de objetos listaUsuarios
        
        if (testeUserName){
            return testeUserName // retorna o objeto
        } else {
            console.log("Usuário não encontrado.")
            return null
        }        
    }

    static procuraUsuarioCpf(cpf: string): Usuario | null {
        const normalizado = Usuario.normalizaCpf(cpf)
        
        while(!normalizado){
            console.log("CPF não pode ser um campo vazio. Tente novamente.")
        }

        const testeCpf = Usuario.listaUsuarios.find((el) => Usuario.normalizaCpf(el._cpf) === normalizado)
        if (testeCpf) {
            return testeCpf
        } else {
            console.error("Usuário não encontrado.")
            return null
        }

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

// proximo upgrade > refatorar normalização fora dos métodos de pesquisa