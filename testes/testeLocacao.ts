import { Locacao } from "../src/Models/Locacao";
import { Livro } from "../src/Models/Livro";
import { Usuario } from "../src/Models/Usuario";
import { Genero } from "../src/Models/Genero";

// Função auxiliar para imprimir os testes
function assert(condicao: boolean, descricao: string) {
    if (condicao) {
        console.log(`✅ SUCESSO - ${descricao}`);
    } else {
        console.error(`❌ FALHOU - ${descricao}`);
    }
}

// Resetando dados antes de cada teste
function resetarLocacoes() {
    Locacao["listaLocacoes"] = [];
    Locacao["contadorID"] = 1;
}

function criarLocacaoValida(): Locacao {
    const genero = new Genero("Fantasia");
    const livro = new Livro("As Crônicas de Nárnia", 9780064471190, "C.S. Lewis", [genero], "HarperCollins", "1ª", new Date("1950-10-16"));
    const usuario = new Usuario("Jade", "jadeusa", "12345678900", "123", true);
    const locacao = new Locacao(livro, usuario);
    locacao.registrarLocacao(locacao);
    return locacao;
}

// ---------------- TESTES ----------------

function testeCadastroLocacao() {
    resetarLocacoes();

    const locacao = criarLocacaoValida();

    assert(Locacao["listaLocacoes"].length === 1, "Deve registrar uma nova locação com sucesso");
    assert(locacao.livro.disponivel === false, "O livro deve ficar indisponível após a locação");
}

function testeBuscaPorId() {
    resetarLocacoes();

    const locacao = criarLocacaoValida();

    const encontrados = Locacao.buscaPorID(locacao.id);
    assert(encontrados.length === 1, "Deve encontrar a locação pelo ID");
    assert(encontrados[0].usuario.nome === "Jade", "Nome do usuário deve ser 'Jade'");
}

function testeBuscaPorUsuario() {
    resetarLocacoes();

    criarLocacaoValida();

    const encontrados = Locacao.buscaPorUsuario("Jade");
    assert(encontrados.length === 1, "Deve encontrar a locação pelo nome do usuário");
    assert(encontrados[0].usuario.nome === "Jade", "Nome do usuário deve ser 'Jade'");
}

function testeBuscaPorLivro() {
    resetarLocacoes();

    criarLocacaoValida();

    const encontrados = Locacao.buscaLocacaoPorLivro("Nárnia");
    assert(encontrados.length === 1, "Deve encontrar a locação pelo nome do livro");
    assert(encontrados[0].livro.nome.includes("Nárnia"), "O nome do livro deve conter 'Nárnia'");
}

function testeLocacoesAtivasEConcluidas() {
    resetarLocacoes();

    const locacao = criarLocacaoValida();

    let ativas = Locacao.buscaLocacaoAtiva();
    assert(ativas.length === 1, "Deve haver uma locação ativa");

    locacao.dataDevolvido = new Date();
    locacao.livro.disponivel = true;

    const concluidas = Locacao.buscaLocacoesConcluidas();
    assert(concluidas.length === 1, "Deve haver uma locação concluída");
}

function testeLocacoesAtrasadas() {
    resetarLocacoes();

    const locacao = criarLocacaoValida();
    locacao["previsaoDevolucao"] = new Date("2000-01-01"); // Forçando como atrasada

    const atrasadas = Locacao.buscaLocacoesAtrasadas();
    assert(atrasadas.length === 1, "Deve encontrar uma locação atrasada");
}

function testeDelecaoLocacao() {
    resetarLocacoes();

    const locacao = criarLocacaoValida();

    locacao.deletarLocacao(locacao);

    assert(Locacao["listaLocacoes"].length === 0, "A locação deve ser removida com sucesso");
}

// ---------------- EXECUÇÃO ----------------

testeCadastroLocacao();
testeBuscaPorId();
testeBuscaPorUsuario();
testeBuscaPorLivro();
testeLocacoesAtivasEConcluidas();
testeLocacoesAtrasadas();
testeDelecaoLocacao();
