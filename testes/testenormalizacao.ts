import { normalizaParaString, normalizaCpf } from "../src/utils/normalizacao";

console.log(normalizaParaString("  Teste ")); // Deve retornar "teste"
console.log(normalizaParaString("TEXTO GRANDE")); // Deve retornar "texto grande"
console.log(normalizaCpf("123.456.789-09")); // Deve retornar "12345678909"
console.log(normalizaCpf("  987 654 321 00  ")); // Deve retornar "98765432100"
console.log(normalizaCpf("abc123def456ghi")); // Deve retornar "123456"