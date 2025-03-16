import { Genero } from "../src/Classes/Genero"

// Criando e testando o cadastro de gêneros
console.log("=== Teste de Cadastro de Gêneros ===")
const genero1 = new Genero("Fantasia")
const genero2 = new Genero("Terror")
const genero3 = new Genero("Fantasia") // Deve exibir que já está cadastrado

// Verificando a lista de gêneros cadastrados
console.log("\nLista de Gêneros Cadastrados:")
console.log(Genero.listaGeneros)

// Testando a busca de um gênero existente
console.log("\n=== Teste de Busca ===")
const busca1 = genero1.procuraGeneroNome("Fantasia")
console.log("Resultado da busca por 'Fantasia':", busca1 ? busca1 : "Não encontrado")

const busca2 = genero1.procuraGeneroNome("Mistério")
console.log("Resultado da busca por 'Mistério':", busca2 ? busca2 : "Não encontrado")

// Testando busca com string vazia
console.log("\n=== Teste de Busca com Nome Vazio ===")
const busca3 = genero1.procuraGeneroNome("")
console.log("Resultado da busca com nome vazio:", busca3 ? busca3 : "Não encontrado")