export function normalizaParaString(string:any): string{
    const normalizado = String(string).trim().toLowerCase()
    return normalizado

}

export function normalizaCpf(cpf: any): string{
    const cpfNormalizado = String(cpf).trim().replace(/\D/g, "")
    return cpfNormalizado
}

export function normalizaParaNumero(valor: any): number | null {
    if (typeof valor === "number" && !isNaN(valor)) {
        return valor;
    }

    const convertido = Number(valor);
    return isNaN(convertido) ? null : convertido;
}
