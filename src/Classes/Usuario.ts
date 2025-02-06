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

    // testes de registro: nome de usuário, cpf
    // iniciar criando os métodos procura usuário por nome de usuario e procura usuario por cpf

    static procuraUsuarioUsername(userName: string): Usuario | null { 

        while(!userName.trim()){
            console.log("Entrada inválida. Tente novamente.")
        } // aqui tratou entrada nula; não segue o fluxo do programa enquanto não receber entrada válida
        
        const normalizado = userName.toLowerCase().trim()
        const testeUserName = Usuario.listaUsuarios.find((el) => el._userName.toLowerCase().trim() === normalizado) // testeUserName é um OBJETO da lista de objetos listaUsuarios
        
        if (testeUserName){
            return testeUserName // retorna o objeto
        } else {
            console.log("Usuário não encontrado.")
            return null
        }        
    }

    static procuraUsuarioCpf(cpf: string): Usuario | null {
        while(!cpf.trim()){
            console.log("Entrada inválida. Tente novamente.")
        }

        const normalizado = cpf.replace(/\D/g, ""); // remove todos caracteres não numéricos da string
        const testeCpf = Usuario.listaUsuarios.find((el) => el._cpf.replace(/\D/g, "") === normalizado)
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