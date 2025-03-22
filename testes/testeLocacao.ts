import {Livro} from "../src/Models/Livro"
import {Usuario} from "../src/Models/Usuario"
import {Locacao} from "../src/Models/Locacao"

// Mensagens de status do teste
function testar(condicao: boolean, mensagem: string) {
    if (condicao) {
        console.log(`✅ ${mensagem} passou.`);
    } else {
        console.log(`❌ ${mensagem} falhou.`);
    }
}

// Simula criação de usuários e livros
const usuario1 = new Usuario("João Silva", "joaosilva", "123.456.789-00", "senha123", false);
const usuario2 = new Usuario("Maria Oliveira", "mariaoliveira", "987.654.321-00", "senha456", false);
const livro1 = new Livro("Livro A", "Autor X", [], "Editora Y", "1ª", new Date(2022, 5, 10));
const livro2 = new Livro("Livro B", "Autor Z", [], "Editora W", "2ª", new Date(2023, 3, 15));

// Exibe início dos testes
console.log("Iniciando testes da classe Locacao...");

// 🔹 Teste: Criar uma locação válida
const locacao1 = new Locacao(livro1, usuario1);
testar(Locacao.listaLocacoes.includes(locacao1), "Criar locação válida");

// 🔹 Teste: Não permitir locação de livro já alugado
const locacao2 = new Locacao(livro1, usuario2);
testar(!Locacao.listaLocacoes.includes(locacao2), "Bloquear locação de livro indisponível");

// 🔹 Teste: Buscar locação por ID
const locacaoEncontrada = locacao1.buscaLocacaoPorID(locacao1["_id"]);
testar(locacaoEncontrada === locacao1, "Buscar locação por ID");

// 🔹 Teste: Buscar locações por usuário
const locacoesUsuario = locacao1.buscaLocacaoPorUsuario(usuario1);
testar(locacoesUsuario !== null && locacoesUsuario.length === 1, "Buscar locação por usuário");

// 🔹 Teste: Buscar locações por livro
const locacoesLivro = locacao1.buscaLocacaoPorLivro(livro1);
testar(locacoesLivro !== null && locacoesLivro.length === 1, "Buscar locação por livro");

// 🔹 Teste: Buscar locações ativas
const locacoesAtivas = locacao1.buscaLocacaoAtiva();
testar(locacoesAtivas.length === 1, "Buscar locações ativas");

// 🔹 Teste: Buscar locações concluídas
const locacoesConcluidas = locacao1.buscaLocacoesConcluidas();
testar(locacoesConcluidas.length === 0, "Buscar locações concluídas");

// 🔹 Teste: Buscar locações atrasadas (simula atraso)
locacao1["_previsaoDevolucao"] = new Date(2024, 0, 1); // Data antiga para testar atraso
const locacoesAtrasadas = locacao1.buscaLocacoesAtrasadas();
testar(locacoesAtrasadas.length === 1, "Buscar locações atrasadas");

// Exibe conclusão dos testes
console.log("Todos os testes foram concluídos.");
