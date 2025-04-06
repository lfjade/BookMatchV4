"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizaParaString = normalizaParaString;
exports.normalizaCpf = normalizaCpf;
exports.normalizaParaNumero = normalizaParaNumero;
function normalizaParaString(string) {
    var normalizado = String(string).trim().toLowerCase();
    return normalizado;
}
function normalizaCpf(cpf) {
    var cpfNormalizado = String(cpf).trim().replace(/\D/g, "");
    return cpfNormalizado;
}
function normalizaParaNumero(valor) {
    if (typeof valor === "number" && !isNaN(valor)) {
        return valor;
    }
    var convertido = Number(valor);
    return isNaN(convertido) ? null : convertido;
}
