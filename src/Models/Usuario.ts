import { normalizaParaString, normalizaCpf, normalizaParaNumero } from "../utils/normalizacao"

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
        this._nome=normalizaParaString(nome)
        this._userName=normalizaParaString(userName)
        this._cpf=normalizaCpf(cpf)
        this._senha=senha
        this._verificaAdmin=verificaAdmin
    }

    static registrarUsuario(usuario: Usuario):
    {sucesso:boolean; erro?:string}
    {
        const testeUserName=Usuario.buscaPorUserName(usuario._userName)
        const testeCpf = Usuario.buscaPorCPF(usuario._cpf)
        if (testeUserName.length>0){
            return {sucesso: false, erro: "USERNAME_DUPLICADO"} //CARALHO, esses tratamento de erros aqui ficou muito de patrão
        }

        if(testeCpf.length>0){
            return {sucesso:false, erro:"CPF_DUPLICADO"}
        }

        Usuario.listaUsuarios.push(usuario)
        return {sucesso:true}
    }

    static deletarUsuario(usuario:Usuario):
    {sucesso:boolean}
    {
        const indice = Usuario.listaUsuarios.findIndex((el) => el.id===usuario.id)
        if (indice !==-1){
            Usuario.listaUsuarios.splice(indice, 1) // a partir do indice da lista encontrado, remove 1 elemento
            return {sucesso:true}
        } else{
            return {sucesso: false}
        }
    } // aqui a verificação acontece na procura pelo índice e não envia nenhuma mensagem de confirmação

    // ----------------------- MÉTODOS DE BUSCA -------------------------

    static buscaPorUserName(userName: string | undefined): Usuario[] { 

        const normalizado = normalizaParaString(userName)
        
        if(!normalizado) return [] // aqui tratou entrada nula;
        
        return Usuario.listaUsuarios.filter((el) => el._userName.includes(normalizado)) || []

    }

    static buscaPorCPF(cpf: string | undefined): Usuario[] {
        const normalizado = normalizaCpf(cpf)
        
        if(!normalizado) return []

        return Usuario.listaUsuarios.filter((el) => el._cpf.includes(normalizado)) || []

    }

    static buscaPorID(id:number | undefined): Usuario[]{
        const normalizado = normalizaParaNumero(id)

        if(!normalizado) return []

        return Usuario.listaUsuarios.filter((el) => String(el._id).includes(String(normalizado))) || []
    }
    
    static buscaPorNome (nome: string | undefined): Usuario[]{
        const normalizado = normalizaParaString(nome)

        if (!normalizado) return []

        return Usuario.listaUsuarios.filter((el) => el._nome.includes(normalizado)) || []
    }
    
    static buscaPorTipoDeConta (conta: boolean): Usuario[]{
        return Usuario.listaUsuarios.filter((el)=> el._verificaAdmin===conta) || []
    }

// --------------- getters --------------
    get id (): number{
        return this._id
    }

    get nome (): string{
        return this._nome
    }

    get username (): string{
        return this._userName
    }

    get cpf (): string{
        return this._cpf
    }

    get verificaAdmin (): boolean{
        return this._verificaAdmin
    }

    // ---------------------- setters --------------
    set id (id:number){
        this._id=id
    }

    set nome (nome:string){
        this._nome=nome
    }

    set userName (userName: string){
        this._userName=userName
    }

    set cpf (cpf:string){
        this._cpf=cpf
    }

    set verificaAdmin(verificaAdmin:boolean){
        this._verificaAdmin=verificaAdmin
    }
}