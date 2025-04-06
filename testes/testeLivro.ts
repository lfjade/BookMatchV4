import { Livro } from "../src/Models/Livro";
import { Genero } from "../src/Models/Genero";
import { LivroErros } from "../src/utils";

// Função auxiliar para imprimir os testes
function assert(condicao: boolean, descricao: string) {
    if (condicao) {
        console.log(`✅ SUCESSO - ${descricao}`);
    } else {
        console.error(`❌ FALHOU - ${descricao}`);
    }
}

// Resetando os dados antes de cada teste
function resetarLivros() {
    Livro["listaLivros"] = [];
    Livro["contadorID"] = 1;
}

// -------------------- TESTES --------------------

function testeCadastroLivro() {
    resetarLivros();

    const generos = [new Genero("Fantasia"), new Genero("Aventura")];
    const livro = new Livro("O Hobbit", 9788578270698, "J.R.R. Tolkien", generos, "HarperCollins", "1ª", new Date("1937-08-20"));

    const resultado = Livro.registrarLivro(livro);

    assert(resultado.sucesso === true, "Deve cadastrar um novo livro com sucesso");
    assert(Livro["listaLivros"].length === 1, "A lista de livros deve conter um livro");
}

function testeBuscaPorNome() {
    resetarLivros();

    const generos = [new Genero("Fantasia")];
    const livro = new Livro("Harry Potter", 9788532511010, "J.K. Rowling", generos, "Rocco", "1ª", new Date("1997-05-25"));

    Livro.registrarLivro(livro);

    const encontrados = Livro.buscaPorNome("Harry");

    assert(encontrados.length === 1, "Deve encontrar o livro pelo nome");
    assert(encontrados[0].nome === "Harry Potter", "O nome do livro encontrado deve ser 'Harry Potter'");
}

function testeBuscaPorISBN() {
    resetarLivros();

    const generos = [new Genero("Fantasia")];
    const livro = new Livro("O Hobbit", 9788578270698, "J.R.R. Tolkien", generos, "HarperCollins", "1ª", new Date("1937-08-20"));

    Livro.registrarLivro(livro);

    const encontrados = Livro.buscaPorISBN(9788578270698);

    assert(encontrados.length === 1, "Deve encontrar exatamente um livro pelo ISBN");
    assert(encontrados[0].nome === "O Hobbit", "O nome do livro encontrado deve ser 'O Hobbit'");
}
function testeBuscaPorId() {
    resetarLivros();

    const generos = [new Genero("Fantasia")];
    const livro = new Livro("O Hobbit", 9788578270698, "J.R.R. Tolkien", generos, "HarperCollins", "1ª", new Date("1937-08-20"));

    Livro.registrarLivro(livro);

    const encontrados = Livro.buscaPorId(1);

    assert(encontrados.length === 1, "Deve encontrar exatamente um livro pelo ID");
    assert(encontrados[0].nome === "O Hobbit", "O nome do livro encontrado deve ser 'O Hobbit'");
}

function testeDelecaoLivro() {
    resetarLivros();

    const generos = [new Genero("Fantasia")];
    const livro = new Livro("Harry Potter", 9788532511010, "J.K. Rowling", generos, "Rocco", "1ª", new Date("1997-05-25"));

    Livro.registrarLivro(livro);

    const resultado = Livro.deletarLivroPorID(livro.id);

    assert(resultado === true, "Deve deletar o livro com sucesso");
    assert(Livro["listaLivros"].length === 0, "A lista de livros deve estar vazia após a deleção");
}

// -------------------- EXECUÇÃO --------------------

testeCadastroLivro();
testeBuscaPorNome();
testeBuscaPorISBN();
testeBuscaPorId();
testeDelecaoLivro();
