import {Livro} from "../src/Classes/Livro"
import { Genero } from "../src/Classes/Genero"
import { normalizaParaString } from "../src/utils/normalizacao";

console.log("Iniciando testes da classe Livro...");

// Resetando lista de livros antes dos testes
Livro.listaLivros = [];
Livro["contadorID"] = 1;

// Teste: Criar um livro corretamente
const genero = new Genero("Fantasia");
const livro = new Livro("O Hobbit", "J.R.R. Tolkien", [genero], "HarperCollins", "1ª", new Date("1937-09-21"));
if (livro instanceof Livro && Livro.listaLivros.length === 1) {
    console.log("✅ Criar um livro corretamente passou.");
} else {
    console.error("❌ Erro: livro não foi criado corretamente");
}

// Teste: Procurar livro pelo nome
const resultadoNome = livro.procuraLivroNome("O Hobbit");
if (resultadoNome && resultadoNome.length === 1) {
    console.log("✅ Procurar livro pelo nome passou.");
} else {
    console.error("❌ Erro: procuraLivroNome falhou");
}

// Teste: Procurar livro pelo autor
const resultadoAutor = livro.procuraLivroAutor("J.R.R. Tolkien");
if (resultadoAutor && resultadoAutor.length === 1) {
    console.log("✅ Procurar livro pelo autor passou.");
} else {
    console.error("❌ Erro: procuraLivroAutor falhou");
}

// Teste: Procurar livro pelo gênero
const resultadoGenero = livro.procuraLivroGenero("Fantasia");
if (resultadoGenero && resultadoGenero.length === 1) {
    console.log("✅ Procurar livro pelo gênero passou.");
} else {
    console.error("❌ Erro: procuraLivroGenero falhou");
}

// Teste: Procurar livro pela editora
const resultadoEditora = livro.procuraLivroEditora("HarperCollins");
if (resultadoEditora && resultadoEditora.length === 1) {
    console.log("✅ Procurar livro pela editora passou.");
} else {
    console.error("❌ Erro: procuraLivroEditora falhou");
}

// Teste: Procurar livro pela edição
const resultadoEdicao = livro.procuraLivroEdicao("1ª");
if (resultadoEdicao && resultadoEdicao.length === 1) {
    console.log("✅ Procurar livro pela edição passou.");
} else {
    console.error("❌ Erro: procuraLivroEdicao falhou");
}

// Teste: Procurar livro pela disponibilidade
const resultadoDisponivel = livro.procuraLivroDisponivel(true);
if (resultadoDisponivel && resultadoDisponivel.length === 1) {
    console.log("✅ Procurar livro pela disponibilidade passou.");
} else {
    console.error("❌ Erro: procuraLivroDisponivel falhou");
}

console.log("Todos os testes foram concluídos.");
