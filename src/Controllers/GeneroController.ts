import { Genero } from "../Models/Genero";
import { exibirGenero } from "../Views/GeneroView";
import { exibirMensagem } from "../Views/MensagemView";
import { GeneroErros, } from "../utils";

function exibirGeneros(generos: Genero[], mensagemNaoEcontrado: string){
    if (generos.length===0){
        exibirMensagem(mensagemNaoEcontrado)
    } else {
        generos.forEach(exibirGenero)
    }
}

export function exibirPorNome (nome: string){
    exibirGeneros(Genero.buscaPorNome(nome), GeneroErros.GENERO_NAO_ENCONTRADO)
}

export function exibirPorId(id:number){
    exibirGeneros(Genero.buscaPorID(id), GeneroErros.GENERO_NAO_ENCONTRADO)
}

export function cadastrar(genero: Genero){
    const resultado = Genero.registrarGenero(genero)

    if (resultado){
        exibirMensagem("Gênero cadastrado com sucesso.")
        return
    }
    if (!resultado){
        exibirMensagem(resultado, "Genero")
    }
}

export function deletar (genero: Genero){
    const resultado = Genero.deletarGenero(genero)
    exibirMensagem(resultado? "Gênero deletado com sucesso." : GeneroErros.GENERO_NAO_ENCONTRADO)
}