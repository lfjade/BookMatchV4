export function normalizaParaString(string:any): string{
    const normalizado = String(string).trim().toLowerCase()
    return normalizado

}

export function normalizaCpf(cpf: any): string{
    const cpfNormalizado = String(cpf).trim().replace(/\D/g, "")
    return cpfNormalizado
}