"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genero_1 = require("../src/models/Genero");
var MensagemView_1 = require("../src/Views/MensagemView");
var utils_1 = require("../src/utils");
// Teste 1 – Cadastro de gênero novo
function testeCadastroGenero() {
    var genero = new Genero_1.Genero("Ação");
    var resultado = Genero_1.Genero.registrarGenero(genero);
    if (resultado.sucesso) {
        console.log("✅ Teste 1 passou: Gênero 'Ação' cadastrado com sucesso.");
    }
    else {
        (0, MensagemView_1.exibirMensagem)(resultado.erro, "Genero");
        console.log("❌ Teste 1 falhou.");
    }
}
// Teste 2 – Tentativa de cadastro duplicado
function testeCadastroGeneroDuplicado() {
    var generoDuplicado = new Genero_1.Genero("Ação");
    var resultado = Genero_1.Genero.registrarGenero(generoDuplicado);
    if (!resultado.sucesso && resultado.erro === utils_1.GeneroErros.GENERO_DUPLICADO) {
        (0, MensagemView_1.exibirMensagem)(resultado.erro, "Genero");
        console.log("✅ Teste 2 passou: Gênero duplicado detectado.");
    }
    else {
        console.log("❌ Teste 2 falhou.");
    }
}
// Teste 3 – Busca por nome existente
function testeBuscaGenero() {
    var encontrados = Genero_1.Genero.buscaPorNome("ção"); // busca por parte do nome "Ação"
    if (encontrados.length > 0 && encontrados[0].nome === "Ação") {
        console.log("✅ Teste 3 passou: Gênero encontrado pela busca.");
    }
    else {
        console.log("❌ Teste 3 falhou: Gênero não foi encontrado.");
    }
}
// Rodar os testes
testeCadastroGenero();
testeCadastroGeneroDuplicado();
testeBuscaGenero();
