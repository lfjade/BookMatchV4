"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirMensagem = exibirMensagem;
var mensagensPadronizadas_1 = require("../utils/mensagensPadronizadas");
function exibirMensagem(mensagem, origem) {
    var mensagemFinal = mensagem;
    if (origem) {
        var mensagensDaOrigem = mensagensPadronizadas_1.mensagensPadronizadas[origem];
        if (mensagensDaOrigem[mensagem]) {
            mensagemFinal = mensagensDaOrigem[mensagem];
        }
    }
    console.log(mensagemFinal);
}
