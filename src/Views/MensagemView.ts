import { mensagensPadronizadas } from "../utils/mensagensPadronizadas"
export function exibirMensagem(mensagem: string, origem?: "Usuario" | "Genero" | "Livro" | "Locacao" ) {
    let mensagemFinal = mensagem
    if (origem){
        const mensagensDaOrigem=mensagensPadronizadas[origem] as Record<string, string>
        if (mensagensDaOrigem[mensagem]){
            mensagemFinal = mensagensDaOrigem[mensagem]
        }
    }

    console.log(mensagemFinal)
}