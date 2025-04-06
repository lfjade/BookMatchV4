import { Genero } from "../Models/Genero";
import { exibirMensagem } from "./MensagemView";

export function exibirGenero(genero: Genero){
    exibirMensagem(`ID: ${genero.id}\n
        Nome: ${genero.nome}`)
}