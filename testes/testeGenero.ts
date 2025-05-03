import { Genero } from "../src/Models/Genero";
import { exibirMensagem } from "../src/Views/MensagemView";
import { GeneroErros } from "../src/utils";

// Teste 1 – Cadastro de gênero novo
function testeCadastroGenero() {
    const genero = new Genero("Ação");
    const resultado = Genero.registrarGenero(genero);

    if (resultado.sucesso) {
        console.log("✅ Teste 1 passou: Gênero 'Ação' cadastrado com sucesso.");
    } else {
        exibirMensagem(resultado.erro!, "Genero");
        console.log("❌ Teste 1 falhou.");
    }
}

// Teste 2 – Tentativa de cadastro duplicado
function testeCadastroGeneroDuplicado() {
    const generoDuplicado = new Genero("Ação");
    const resultado = Genero.registrarGenero(generoDuplicado);

    if (!resultado.sucesso && resultado.erro === GeneroErros.GENERO_DUPLICADO) {
        exibirMensagem(resultado.erro, "Genero");
        console.log("✅ Teste 2 passou: Gênero duplicado detectado.");
    } else {
        console.log("❌ Teste 2 falhou.");
    }
}

// Teste 3 – Busca por nome existente
function testeBuscaGenero() {
    const encontrados = Genero.buscaPorNome("ção"); // busca por parte do nome "Ação"

    if (encontrados.length > 0 && encontrados[0].nome === "Ação") {
        console.log("✅ Teste 3 passou: Gênero encontrado pela busca.");
    } else {
        console.log("❌ Teste 3 falhou: Gênero não foi encontrado.");
    }
}

// Rodar os testes
testeCadastroGenero();
testeCadastroGeneroDuplicado();
testeBuscaGenero();
