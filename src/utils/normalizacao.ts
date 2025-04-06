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

export function formataData (data: Date): string{
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth()).padStart(2, '0')
    const ano = data.getFullYear()

    return `${dia}/${mes}/${ano}`
}