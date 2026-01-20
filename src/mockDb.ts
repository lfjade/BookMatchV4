// mockDB.ts
import { Usuario } from "./Models/Usuario"
import { Genero } from "./Models/Genero"
import { Livro } from "./Models/Livro"
import { Locacao } from "./Models/Locacao"

console.log("Mock DB iniciado!")

// ------------------------------
// 1. Criar Usuários
// ------------------------------
console.log("-------- Criação de usuários --------")
const admin = new Usuario(
    "admin",
    "admin",
    "11111111111",
    "admin",
    true
)

const user1 = new Usuario(
    "Jade Fernandes",
    "jade",
    "22222222222",
    "senha123",
    false
)

const user2 = new Usuario(
    "Aiko Tsukino",
    "aiko",
    "33333333333",
    "lua123",
    false
)

Usuario.registrarUsuario(admin)
Usuario.registrarUsuario(user1)
Usuario.registrarUsuario(user2)


// ------------------------------
// 2. Criar Gêneros
// ------------------------------
console.log("-------- Criação de gêneros --------")
const generoFantasia = new Genero("Fantasia")
const generoFiccao    = new Genero("Ficção Científica")
const generoRomance   = new Genero("Romance")
const generoTerror    = new Genero("Terror")

Genero.registrarGenero(generoFantasia)
Genero.registrarGenero(generoFiccao)
Genero.registrarGenero(generoRomance)
Genero.registrarGenero(generoTerror)


// ------------------------------
// 3. Criar Livros
// ------------------------------
console.log("-------- Criação de livros --------")
const livro1 = new Livro(
    "O Nome do Vento",
    123456,
    "Patrick Rothfuss",
    [generoFantasia],
    "Arqueiro",
    "1ª edição",
    new Date("2009-01-01")
)

const livro2 = new Livro(
    "Duna",
    654321,
    "Frank Herbert",
    [generoFiccao],
    "Aleph",
    "2ª edição",
    new Date("1965-08-01")
)

const livro3 = new Livro(
    "Orgulho e Preconceito",
    789101,
    "Jane Austen",
    [generoRomance],
    "Penguin",
    "1ª edição",
    new Date("1813-01-28")
)

const livro4 = new Livro(
    "It: A Coisa",
    191817,
    "Stephen King",
    [generoTerror],
    "Suma",
    "3ª edição",
    new Date("1986-09-15")
)

Livro.registrarLivro(livro1)
Livro.registrarLivro(livro2)
Livro.registrarLivro(livro3)
Livro.registrarLivro(livro4)


// ------------------------------
// Locações iniciais
// ------------------------------

console.log("-------- Criação de locações --------")
const locacao1 = new Locacao(livro1, user1)
locacao1.registrarLocacao(locacao1)

const locacao2 = new Locacao(livro3, user2)
locacao2.registrarLocacao(locacao2)


// ------------------------------
// 5. Exportar dados para usar nos testes
// ------------------------------
export const mockDB = {
    usuarios: Usuario.listaUsuarios,
    generos: Genero.listaGeneros,
    livros: Livro.listaLivros,
    locacoes: Locacao.listaLocacoes
}
